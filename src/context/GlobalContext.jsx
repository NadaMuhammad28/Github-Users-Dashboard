import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/GlobalReducer";
import axios from "axios";

//context
const dataContext = React.createContext();
const rootEndPoint = "https://api.github.com/";
const GlobalContext = ({ children }) => {
  const initialState = {
    isLoading: false,
    errMsg: "",
    userInfo: {},
    followers: [],
    repos: [],
    languagesFreq: [],
    starsPerLangs: [],
    mostStarredRpos: [],
    mostForkedRepos: [],
    isSearchDisabled: false,
    limit: 60,
    usedReqs: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchedUser, setSearchedUser] = useState("");

  const checkRequest = async () => {
    try {
      const { data } = await axios.get(`${rootEndPoint}rate_limit`);
      const { limit, used, remaining } = data.rate;
      dispatch({ type: "CHECK_REQUESTS_LIMIT", payload: { limit, used } });
      if (!remaining) dispatch({ type: "DISABLE_SEARCH" });
    } catch (e) {}
  };
  useEffect(() => checkRequest, []);

  const fetchUser = async (user) => {
    try {
      const dat = await axios.get(`${rootEndPoint}users/${user}`);
      return dat.data;
    } catch (e) {
      dispatch({ type: "TOGGLE_ERR", payload: "user not found" });
    }
  };

  const fetchRepos = async (user) => {
    try {
      let page = 1;
      let res = await axios.get(
        `${rootEndPoint}users/${user}/repos?per_page=100&page=${page}`
      );
      let repos = res.data;
      //if there's pagination
      if (res.headers.link) {
        const pages = res.headers.link[res.headers.link.length - 14];
        while (page < pages) {
          page += 1;
          let paginatedRes = await axios.get(
            `${rootEndPoint}users/${user}/repos?per_page=100&page=${page}`
          );
          repos = [...repos, ...paginatedRes.data];
        }
      }
      return repos;
    } catch (e) {
      console.log(e.message);
    }
  };
  const fetchFollowers = async (user) => {
    try {
      const { data } = await axios.get(
        `${rootEndPoint}users/${user}/followers?per_page=100`
      );

      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchData = async (user) => {
    try {
      dispatch({ type: "FIRE_LOADING" });
      //fetch user profile
      const profile = await fetchUser(user);
      if (!profile) throw new Error("user not found");
      const repos = await fetchRepos(user);

      //followers
      const followers = await fetchFollowers(user);

      //rate limit

      checkRequest();

      //user profile . repos, followers
      dispatch({
        type: "SET_DATA",
        payload: { userInfo: profile, repos, followers },
      });
      dispatch({ type: "GET_LANG_FREQ" });
      dispatch({ type: "OFF_LOADING" });
    } catch (e) {
      dispatch({ type: "TOGGLE_ERR", payload: "user not found" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedUser) fetchData(searchedUser);
  };

  return (
    <dataContext.Provider
      value={{ ...state, setSearchedUser, searchedUser, handleSubmit }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(dataContext);
};
export { GlobalContext, useGlobalContext };

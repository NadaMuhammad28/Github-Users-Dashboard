import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/GlobalReducer";
import axios from "axios";
import { useNavigate } from "react-router";

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
    usedReqs: JSON.parse(localStorage.getItem("usedReqs")) || 0,
    isOffline: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchedUser, setSearchedUser] = useState("");
  const [authUser, setAuthUSer] = useState(null);
  const navigate = useNavigate();
  const checkRequest = async () => {
    try {
      const { data } = await axios.get(`${rootEndPoint}rate_limit`);
      const { limit, used, remaining } = data.rate;
      dispatch({ type: "CHECK_REQUESTS_LIMIT", payload: { limit, used } });
      localStorage.setItem("usedReqs", JSON.stringify(used));
      if (!remaining) dispatch({ type: "DISABLE_SEARCH" });
    } catch (e) {}
  };

  useEffect(() => {
    if (window.location) {
      // console.log(window.location);
      navigate("/", { replace: true });
    }
    // console.log("from context", user);
    checkRequest();
  }, []);

  useEffect(() => {
    if (authUser) {
      // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
      fetchData(authUser);
    }
  }, [authUser]);
  useEffect(() => {
    window.addEventListener("online", () => {
      dispatch({ type: "CHECK_BROWSER_NETWORK" });
    });
    window.addEventListener("offline", () => {
      dispatch({ type: "CHECK_BROWSER_NETWORK" });
    });

    return () => {
      window.removeEventListener("online", () => {
        dispatch({ type: "CHECK_BROWSER_NETWORK" });
      });

      window.removeEventListener("offline", () => {
        dispatch({ type: "CHECK_BROWSER_NETWORK" });
      });
    };
  }, [navigator.onLine]);
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
      value={{
        ...state,
        setSearchedUser,
        searchedUser,
        handleSubmit,
        setAuthUSer,
        authUser,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(dataContext);
};
export { GlobalContext, useGlobalContext };

import { getMostVals } from "../utils/helper";
export const reducer = (state, action) => {
  switch (action.type) {
    //loading on
    case "FIRE_LOADING": {
      return { ...state, isLoading: true };
    }

    //loading off
    case "OFF_LOADING": {
      return { ...state, isLoading: false };
    }

    //set data
    case "SET_DATA": {
      const { userInfo, repos, followers } = action.payload;

      return { ...state, userInfo, repos, followers, errMsg: "" };
    }
    //err detected
    case "TOGGLE_ERR": {
      return { ...state, isLoading: false, errMsg: action.payload };
    }

    //disable search --> remaining quota=0
    case "DISABLE_SEARCH": {
      return { ...state, isSearchDisabled: true };
    }
    case "CHECK_REQUESTS_LIMIT": {
      return {
        ...state,
        limit: action.payload.limit,
        usedReqs: action.payload.used,
      };
    }
    //////////////////////////////////////////////////////
    case "GET_LANG_FREQ": {
      let { langsFreq, starsLangFreq, popularRepos, ForkedRepos } =
        state.repos.reduce(
          (prevItems, currentItem) => {
            const {
              language,
              stargazers_count: stars,
              name,
              forks_count: forks,
            } = currentItem;
            //1--> caluclate languages freq over all repos
            if (language) {
              prevItems.langsFreq[language]
                ? (prevItems.langsFreq[language] = {
                    label: language,
                    value: prevItems.langsFreq[language].value + 1,
                  })
                : (prevItems.langsFreq[language] = {
                    label: language,
                    value: 1,
                  });
            }
            //2--> calculate most popular repos based on stars count
            if (stars) {
              prevItems.popularRepos[name] = { label: name, value: stars };
            }
            if (forks) {
              prevItems.ForkedRepos[name] = { label: name, value: forks };
            }
            //3--> calculate stars per lang
            if (stars && language) {
              prevItems.starsLangFreq[language]
                ? (prevItems.starsLangFreq[language] = {
                    label: language,
                    value: prevItems.starsLangFreq[language].value + stars,
                  })
                : (prevItems.starsLangFreq[language] = {
                    label: language,
                    value: stars,
                  });
            }
            return prevItems;
          },
          {
            langsFreq: {},
            starsLangFreq: {},
            popularRepos: {},
            ForkedRepos: {},
          }
        );

      return {
        ...state,
        languagesFreq: [...Object.values(langsFreq)],
        starsPerLangs: [...Object.values(starsLangFreq)],
        mostStarredRpos: getMostVals(popularRepos),
        mostForkedRepos: getMostVals(ForkedRepos),
      };
    }

    default:
      return state;
  }
};

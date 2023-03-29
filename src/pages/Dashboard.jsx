import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import Search from "../components/Search";
import Loader from "../components/Loader";
import UserStatistics from "./UserStatistics";
import RateLimit from "../components/RateLimitBar";
import OfflineMode from "../components/OfflineMode";
import Hero from "../components/welcomeHero";

const Dashboard = () => {
  const { isLoading, isOffline, authUser } = useGlobalContext();
  return (
    <Main>
      {isOffline && <OfflineMode />}
      {authUser && <Hero />}
      <Search />
      <RateLimit />
      {isLoading ? <Loader /> : <UserStatistics />}
    </Main>
  );
};

const Main = styled.main`
  .container {
    width: 80vw;
    margin: auto;
  }
`;

export default Dashboard;

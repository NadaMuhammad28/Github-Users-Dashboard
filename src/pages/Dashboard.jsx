import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import Search from "../components/Search";
import Loader from "../components/Loader";
import UserStatistics from "./UserStatistics";
import RateLimit from "../components/RateLimitBar";
const Dashboard = () => {
  const { isLoading } = useGlobalContext();
  return (
    <Main>
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

import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import {
  LangChart,
  StarPerLangChart,
  MostStarredChart,
  MostForkedChart,
} from "./charts/index";
const ChartsWrapper = () => {
  const { languagesFreq, starsPerLangs, mostStarredRpos, mostForkedRepos } =
    useGlobalContext();
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div className="chart-wrapper">
          <LangChart data={languagesFreq} />
        </div>
        <div className="chart-wrapper">
          <MostStarredChart data={mostStarredRpos} />
        </div>

        <div className="chart-wrapper">
          <StarPerLangChart data={starsPerLangs} />
        </div>
        <div className="chart-wrapper">
          <MostForkedChart data={mostForkedRepos} />
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  .chart-wrapper {
    flex-basis: 48%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    .chart-wrapper {
      flex-basis: 100%;
    }
  }
`;
export default ChartsWrapper;

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
        <div className="chart-wrapper-1">
          <div className="chart-content">
            <LangChart data={languagesFreq} />
          </div>
          <div className="chart-content">
            <MostStarredChart data={mostStarredRpos} />
          </div>
        </div>

        <div className="chart-wrapper-2">
          <div className="chart-content">
            <StarPerLangChart data={starsPerLangs} />
          </div>
          <div className="chart-content">
            <MostForkedChart data={mostForkedRepos} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  .chart-wrapper-1,
  .chart-wrapper-2 {
    width: 100%;
    display: flex;
    gap: 2rem;
    border-radius: var(--radius);
    .chart-content {
      flex-shrink: 1;
      flex-basis: 48%;
    }
  }
  @media (max-width: 820px) {
    .chart-wrapper-1,
    .chart-wrapper-2 {
      flex-direction: column;
      .chart-content {
        flex-basis: 100%;
      }
    }
  }
`;
export default ChartsWrapper;

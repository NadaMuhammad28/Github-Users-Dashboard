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
        <LangChart data={languagesFreq} />
        <MostStarredChart data={mostStarredRpos} />
        <StarPerLangChart data={starsPerLangs} />
        <MostForkedChart data={mostForkedRepos} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  // justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 3fr 3fr;
  }
  div {
    background: var(--clr-primary-11);
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
    background: var(--clr-primary-11);
  }
  svg {
    background: var(--clr-primary-11) !important;

    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default ChartsWrapper;

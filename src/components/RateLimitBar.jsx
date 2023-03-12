import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import { calcProgressWidth } from "../utils/helper";
const RateLimit = () => {
  const { usedReqs, limit, remaining } = useGlobalContext();
  const width = calcProgressWidth(usedReqs, limit);
  return (
    <Wrapper className="section-center">
      <span>
        {remaining === 0 ? "Hourly Limit is exceeded" : "Hourly Limit"}{" "}
      </span>
      <div className="progress" style={{ width: `${width}%`, height: "100%" }}>
        {width}%
      </div>
    </Wrapper>
  );
};

export default RateLimit;
const Wrapper = styled.header`
  height: 0.6vh;
  position: relative;
  background: var(--clr-primary-11);
  margin-bottom: 2rem;
  span {
    position: absolute;
    top: 1rem;
    right: 0;
    font-size: 0.9rem;
  }
  .progress {
    text-align: right;
    background-color: var(--clr-primary-5);
    transition: ease-in-out 0.6s width;
    font-size: 0.7rem;
    line-height: 2.2;
  }
`;

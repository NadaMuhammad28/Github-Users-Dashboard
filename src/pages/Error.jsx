import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          go home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    font-weight: 400;
    color: var(--clr-primary-10);
  }
  h3 {
    color: var(--clr-primary-9);
    margin-bottom: 1.5rem;
  }
`;
export default Error;

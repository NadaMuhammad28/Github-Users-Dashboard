import { useGlobalContext } from "../context/GlobalContext";
import { supabase } from "../client";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import { MdOutlineLogout, MdPersonPin } from "react-icons/md";
const Hero = () => {
  const { authUser, setAuthUSer } = useGlobalContext();
  const navigate = useNavigate();
  async function signOut() {
    await supabase.auth.signOut();
    setAuthUSer(null);
    // navigate("/");
  }
  return (
    <Wrapper>
      <div className="content">
        <h5>
          <MdPersonPin />

          <span>{authUser} </span>
        </h5>
        <button onClick={signOut}>
          <span>logout </span>
          <MdOutlineLogout />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("header")`
  width: 100%;
  min-height: 4rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  background: var(--clr-primary-11);
  border-radius: 0px 0px 38px 38px;
  .content {
    width: 100%;
    padding: 2% 0;
    height: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 2rem;
    color: rgb(191, 223, 255);
    // font-size: 1.5rem;
  }
  h5 {
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    color: rgb(191, 223, 255);
    cursor: pointer;
  }
  button:hover > svg {
    transform: translateX(15%);
  }
  svg {
    font-size: 1.3rem;
    margin-right: 0.3rem;
  }
  span {
    color: rgb(191, 223, 255);

    letter-spacing: 1px;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.1rem;
  }
  span,
  svg {
    vertical-align: middle;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 540px) {
    svg {
      font-size: 1.02rem;
    }
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 410px) {
    svg {
      font-size: 1rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
`;

export default Hero;

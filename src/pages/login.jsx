import { Link } from "react-router-dom";
import styled from "styled-components";
import { supabase } from "../client";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const nvigateToGuestMode = () => {
    navigate("/guest");
  };
  return (
    <Wrapper className="section">
      <div className="section-center">
        <section className="content-container">
          <header>
            <h1>Github Dashboard</h1>
            <p>Want to know more about your reposoitories? Sign in</p>
          </header>
          <div className="sign-btns">
            <button type="button" onClick={signInWithGithub} className="">
              <SiGithub /> <span> login with github</span>
            </button>
            <button type="button" onClick={nvigateToGuestMode}>
              continue as a guest{" "}
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("main")`
  min-height: 100vh;
  background: url(/hero-bg.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-container {
    padding: 5%;
    min-width: 50%;
    margin: auto;
    background: rgba(45, 52, 98, 0.4);
    border: solid 2px #333b70;
    backdrop-filter: blur(1px);
    min-height: 70vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  header {
    text-align: center;
    text-transform: capitalize;
    p {
      color: #8b949e;
      font-size: 1.1rem;
      font-weight: 400;
    }
    h1 {
      line-height: 1.5;
      font-weight: 600;
    }
  }
  .sign-btns {
    flex-direction: column;
    display: flex;
    gap: 2rem;
  }
  svg,
  span {
    vertical-align: middle;
  }
  button {
    vertical-align: middle;

    text-transform: uppercase;
    background: #5664b3;
    color: var(--clr-primary-10);
    padding: 0.7rem 0.8rem;
    letter-spacing: var(--spacing);
    font-weight: 500;
    font-size: 0.99rem;
    cursor: pointer;
    border-radius: var(--radius);
    border: none;
    box-shadow: 0 0 40px 40px #5664b3 inset, 0 0 0 0 #5664b3;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
  }

  button:hover {
    background: #333b70;
    box-shadow: 0 0 2px 0 #5664b3 inset, 0 0 10px 0px #5664b3;
  }
  @media (max-width: 800px) {
    .content-container {
      height: 80vh;
    }
  @media (max-width: 645px) {
    .content-container {
      height: 75vh;
      backdrop-filter: blur(3px);
    }

    button {
      padding: 0.6rem 0.7rem;
      font-size: 0.82rem;
      font-weight: 600;
    }
  }
  @media (max-width: 445px) {
    .content-container {
      height: 70vh;
    }

    button {
      padding: 0.6rem 0.7rem;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;
export default Login;

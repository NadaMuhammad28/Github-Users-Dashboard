import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/GlobalContext";
const Search = () => {
  const {
    searchedUser,
    setSearchedUser,
    handleSubmit,
    errMsg,
    isSearchDisabled,
  } = useGlobalContext();

  return (
    <section className="section">
      <div className="section-center d-flex-col">
        <ErrorWrapper>
          <p>{errMsg}</p>
        </ErrorWrapper>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <MdSearch />
              <label htmlFor="search">search</label>
              <input
                id="search"
                name="user"
                placeholder="Github username"
                value={searchedUser}
                onChange={(e) => setSearchedUser(e.target.value)}
              />
              <button
                disabled={isSearchDisabled}
                className={isSearchDisabled ? "disabled-btn" : ""}
              >
                Search
              </button>
            </div>
          </form>
        </Wrapper>
      </div>
    </section>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-11);
  border-radius: var(--radius);

  label {
    display: none;
  }

  .form-control {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      background-color: var(--clr-primary-11-5) !important;
      border-color: transparent;
      outline: 2px solid var(--clr-primary-11-2);
      letter-spacing: var(--spacing);
      color: var(--clr-primary-10);
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: var(--radius);

      &:focus {
        background-color: var(--clr-primary-11-5);

        outline: 2px solid var(--clr-primary-5);
      }
    }
    input::placeholder {
      color: var(--clr-grey-5);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: transparent;
      border: 2px solid var(--clr-primary-11-1);
      color: var(--clr-primary-5);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-11-1);
        color: var(--clr-primary-10);
      }
    }










    @media (max-width: 330px){
      .form-control{
        grid-template-columns:.6fr .4fr;
      }
   svg{
    display:none;
    visible:hidden;
   }
   button{
    padding: 0.12rem 0.15rem;
   }
    
  }



    // 
    .disabled-btn {
      cursor: not-allowed;
      color: var(--clr-grey-5) !important;
    }
    .disabled-btn:hover,
    .disabled-btn:active {
      color: var(--clr-grey-5) !important;

      background: transparent;
    }
    svg {
      color: var(--clr-primary-5);
      font-size: 1.3rem;
    }
    input,
    button {
      font-size: 1rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }

`;
const ErrorWrapper = styled.article`
  text-transform: capitalize;
  p {
    color: #bfdfff;
    letter-spacing: var(--spacing);
    margin-bottom: 0.2rem !important;
  }
`;

export default Search;

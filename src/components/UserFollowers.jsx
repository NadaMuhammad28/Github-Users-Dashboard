import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
const UserFollowers = () => {
  const { followers } = useGlobalContext();

  return (
    <Wrapper>
      <div className="followers">
        {/* <div className="tag">followers </div> */}
        {followers.map((user, index) => {
          return (
            <a href={user.html_url} target="_blank" key={index}>
              <article>
                <img src={user.avatar_url} alt={user.login} />
                <div>
                  <h5>{user.login}</h5>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  // overflow-y: scroll;
  flex-basis: 50%;
  max-height: 340px;
  min-height: 340px;
  border: 1px solid var (--clr-primary-11);
  background: var(--clr-primary-11);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding: 0;
  position: relative;
  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-primary-11);
    color: var(--clr-grey-10);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    max-height: 340px;
    overflow-y: scroll;
    // height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #13162a;
      border: 1px solid #13162a;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #262c54;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--clr-primary-11-2);
    }
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h5 {
      margin-bottom: 0;
      color: var(--clr-grey-8) !important;

      &:hover {
        color: var(--clr-grey-10) !important;
      }
    }

    a {
      color: var(--clr-grey-10) !important;
      // color: var(--clr-grey-5) ;
    }
  }
`;
export default UserFollowers;

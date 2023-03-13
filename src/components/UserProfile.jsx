import styled from "styled-components";
import {
  MdBusiness,
  MdLocationOn,
  MdLink,
  MdCalendarMonth,
  MdEmail,
} from "react-icons/md";
import avatar from "../assets/avatar.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { userInfo } = useGlobalContext();
  const {
    login,
    avatar_url,
    html_url,
    name,
    bio,
    location,
    twitter_username,
    company,
    email,
    blog,
    created_at,
  } = userInfo;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url || avatar} alt={login} />
        <div>
          <h4>{name || login}</h4>
          <p className="username">{login}</p>
        </div>
        <Link to={html_url} target="_blank" className="follow">
          Follow
        </Link>
      </header>

      {bio && <p className="bio">{bio} </p>}
      <div className="links">
        {company && (
          <p>
            <MdBusiness /> {company}
          </p>
        )}
        {/*  */}
        {location && (
          <p>
            <MdLocationOn /> {location}
          </p>
        )}
        {email && (
          <a href="" target="_blank" rel="noopener noreferrer external">
            <p>
              <MdEmail /> {email}
            </p>
          </a>
        )}
        {blog && (
          <a
            href={
              blog.startsWith("www.") ? `https://${blog.substring(4)}` : blog
            }
            target="_blank"
            rel="noopener noreferrer external"
          >
            <p>
              <MdLink /> {blog}
            </p>
          </a>
        )}
        {twitter_username && (
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noopener noreferrer external"
          >
            <p>
              <AiOutlineTwitter /> @{twitter_username}
            </p>
          </a>
        )}
        {created_at && (
          <p>
            <MdCalendarMonth /> {created_at.substring(0, 10)}
          </p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex-basis: 50%;
  max-height: 340px;
  background: var(--clr-primary-11);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
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

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    // grid-template-rows:1fr 1fr 1fr; 
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }



  @media (max-width:376px){
        max-height:500px;

    header{

    display:flex;
    justify-content:center;
    flex-direction:column;
    gap:1rem;
    justify-content:center;
    }
    .follow{
      text-align:right;

    }
    h4,.username{text-align:center;}
  }
  .bio {
    color: var(--clr-grey-7);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-white);
      }
    }
  }
  a > p:hover {
    color: #fff !important;
  }
`;
export default UserProfile;

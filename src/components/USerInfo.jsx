import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
//icons
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
const UserInfo = () => {
  const { userInfo } = useGlobalContext();

  const Info = [
    {
      id: 1,
      bg: "pink",
      Icon: <GoRepo className="icon" />,
      label: "repos",
      value: userInfo.public_repos,
    },
    {
      id: 2,
      bg: "green",
      Icon: <FiUsers className="icon" />,
      label: "followers",
      value: userInfo.followers,
    },
    {
      id: 3,
      bg: "purple",
      Icon: <FiUserPlus className="icon" />,
      label: "following",
      value: userInfo.following,
    },
    {
      id: 4,
      bg: "yellow",
      Icon: <GoGist className="icon" />,
      label: "gists",
      value: userInfo.public_gists,
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {Info.map((item) => {
          return (
            <article key={item.id} className="item">
              <span className={item.bg}>{item.Icon}</span>
              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>
          );
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-primary-11);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      text-align: center;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      text-align: center;

      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-align: center;

      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;

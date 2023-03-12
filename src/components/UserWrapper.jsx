import styled from "styled-components";
import UserFollowers from "./UserFollowers";
import UserProfile from "./UserProfile";
const UserWrapper = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <UserProfile />
        <UserFollowers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 3rem 2rem;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
export default UserWrapper;

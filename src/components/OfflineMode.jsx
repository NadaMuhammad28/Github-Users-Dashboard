import styled from "styled-components";

const OfflineMode = () => {
  return <Wrapper>offline Mode</Wrapper>;
};

export default OfflineMode;

const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem;
  background: #320001;
  color: var(clr-grey-10);
  text-align: center;
`;

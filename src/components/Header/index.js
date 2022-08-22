import styled from "styled-components";
import Navigation from "../Navigation";

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #ffe135;
  align-items: center;
  margin-bottom: 10vh;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

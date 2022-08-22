import styled from "styled-components";
import Navigation from "../Navigation";

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #ede7d9;
  align-items: center;

  img {
    width: 10%;
    margin: 1%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

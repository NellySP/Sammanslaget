import styled from "styled-components";
import Navigation from "../Navigation";

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  /* background-color: #ffe135; */
  background-color: pink;
  align-items: center;
  /* margin-bottom: 10vh; */
  /* border: 1px solid black; */

  h1 {
    margin-left: 5%;
    font-family: "Montserrat";
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Bidragsnamn!</h1>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

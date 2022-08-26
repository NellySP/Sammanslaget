import styled from "styled-components";
import Navigation from "../Navigation";

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #ebccca;
  align-items: center;

  h1 {
    margin-left: 5%;
    font-family: "Montserrat";
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <a href="/">GUILTR.I.P </a>
      </h1>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

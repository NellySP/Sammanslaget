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
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>GUILTR.I.P </h1>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

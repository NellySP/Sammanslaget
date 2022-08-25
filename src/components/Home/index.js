import styled from "styled-components";
import Game from "../Game";
import MobileHome from "../MobileGame";
import { isBrowser } from "react-device-detect";

const StyledHome = styled.div`
  p {
    font-family: "Roboto";
  }
`;

const HomePage = () => {
  if (isBrowser) {
    return (
      <StyledHome>
        <Game />
      </StyledHome>
    );
  }
  return (
    <StyledHome>
      <MobileHome />
    </StyledHome>
  );
};

export default HomePage;

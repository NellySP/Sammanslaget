import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";

const StyledHome = styled.div`
  .game-container {
    border: 1px solid black;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    padding: 3%;
    background-color: #ffe135;
  }

  canvas {
    max-width: 100%;
  }

  p {
    font-family: "Roboto";
  }
`;

const HomePage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/SammanslagetHackaton(WebGL).loader.js",
    dataUrl: "Build/SammanslagetHackaton(WebGL).data",
    frameworkUrl: "Build/SammanslagetHackaton(WebGL).framework.js",
    codeUrl: "Build/SammanslagetHackaton(WebGL).wasm",
  });

  return (
    <StyledHome>
      <Unity unityProvider={unityProvider} />
    </StyledHome>
  );
};

export default HomePage;

import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";

const StyledGame = styled.div`
  canvas {
    max-width: 100%;
  }
`;

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/SammanslagetHackaton(WebGL).loader.js",
    dataUrl: "Build/SammanslagetHackaton(WebGL).data",
    frameworkUrl: "Build/SammanslagetHackaton(WebGL).framework.js",
    codeUrl: "Build/SammanslagetHackaton(WebGL).wasm",
  });

  return (
    <StyledGame>
      <Unity unityProvider={unityProvider} />
    </StyledGame>
  );
};

export default Game;

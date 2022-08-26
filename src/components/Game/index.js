import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";

const StyledGame = styled.div`
  canvas {
    max-width: 100%;
    min-width: 100%;
    /* padding: 0.01%; */
  }
`;

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/GUILTR.I.P.loader.js",
    dataUrl: "Build/GUILTR.I.P.data.unityweb",
    frameworkUrl: "Build/GUILTR.I.P.framework.js.unityweb",
    codeUrl: "Build/GUILTR.I.P.wasm.unityweb",
  });

  return (
    <StyledGame>
      <Unity unityProvider={unityProvider} />
    </StyledGame>
  );
};

export default Game;

import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";

const StyledGame = styled.div`
  .canvas-container {
    /* margin-right: 1rem;
    margin-left: 1rem; */
    padding-left: 1rem;
    padding-right: 1rem;
  }
  canvas {
    max-width: 100%;

    display: flex;
    justify-content: center;
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
      <div className="canvas-container">
        <Unity unityProvider={unityProvider} />
      </div>
    </StyledGame>
  );
};

export default Game;

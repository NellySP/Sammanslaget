import styled from "styled-components";
// import game from "../../images/dried.jpg";
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
  img {
    width: 70%;
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
      <div>
        <h2>Home page</h2>
        <p>This space is reserved for the amazing change inducing project</p>
      </div>
      <h3>Here is the game!</h3>
      <div className="game-container">
        <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 }}
        />
        {/* <img alt="This is a game" src={game}></img> */}
      </div>
    </StyledHome>
  );
};

export default HomePage;

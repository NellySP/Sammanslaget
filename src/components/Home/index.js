import styled from "styled-components";
import game from "../../images/dried.jpg";

const StyledAbout = styled.div`
  .game-container {
    border: 1px solid black;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    padding: 3%;
  }
  img {
    width: 70%;
  }
`;

const HomePage = () => {
  return (
    <StyledAbout>
      <div>
        <h2>Home page</h2>
        <p>This space is reserved for the amazing change inducing project</p>
      </div>
      <h3>Here is the game!</h3>
      <div className="game-container">
        <img alt="This is a game" src={game}></img>
      </div>
    </StyledAbout>
  );
};

export default HomePage;

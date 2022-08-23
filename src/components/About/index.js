import styled from "styled-components";
import example from "../../images/glasses-pug.jpg";

const StyledAbout = styled.div`
  width: 100vw;
  min-height: 100vh;

  img {
    width: 60%;
  }

  p {
    margin-right: 5vw;
    margin-left: 5vw;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 5%;
  }

  .item {
    border: 1px solid black;
    margin: 5%;
    background-color: #ffe135;
  }

  a {
    color: black;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline black;
  }

  @media screen and (max-width: 600px) {
    .parent {
      display: flex;
      flex-direction: column;
    }

    .item {
      margin: 5%;
    }
  }
`;

const AboutPage = () => {
  return (
    <StyledAbout>
      <div>
        <h2>About page</h2>
        <p>This space is all about the amazing us</p>
      </div>
      <div className="parent">
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
        <div className="item">
          <h3>Person</h3>
          <img alt="This is dog" src={example}></img>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
          <p>Om person. oj så intressant!</p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutPage;

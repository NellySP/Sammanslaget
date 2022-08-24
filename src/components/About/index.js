import styled from "styled-components";
import example from "../../images/glasses-pug.jpg";
import dried from "../../images/dried.jpg";

const StyledAbout = styled.div`
  width: 100vw;
  min-height: 100vh;

  h2 {
    margin-top: 5%;
    font-family: "Roboto";
  }

  h3 {
    font-family: "Roboto";
  }

  .img-container {
    border-radius: 50%;
  }

  img {
    width: 60%;
    border: 20px solid hotpink;
    border-radius: 25px;
    /* border-radius: 50%; rund men den blir inte rund */
  }

  p {
    /* font-size: 16px; verkar vara den förinställda standarden */
    margin-right: 5vw;
    margin-left: 5vw;
    font-family: "Roboto";
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 5%;
  }

  .item {
    /* border: 1px solid black; */
    margin: 5%;
    /* background-color: #ffe135; */
    background-color: pink;
    border-radius: 25px;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
  }

  a {
    font-family: "Roboto";
    color: black;
    text-decoration: underline;
    margin: 2%;
  }

  @media screen and (max-width: 900px) {
    .parent {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .item {
      margin: 5%;
    }
  }

  @media screen and (max-width: 600px) {
    .parent {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
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
        <h2>Vi som skapat *bidragsnamn*!</h2>
      </div>
      <div className="parent">
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={dried}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={dried}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={dried}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
          <div className="link-container">
            <a href="https://www.yrgo.se/">Länk till Linkedin</a>
            <a href="https://www.yrgo.se/">Länk till Portfolio</a>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutPage;

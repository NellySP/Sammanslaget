import styled from "styled-components";
import lemon from "../../images/single-lemon.jpg";

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

  h4 {
    font-family: "Roboto";
  }

  img {
    width: 70%;
    border-radius: 50%;
    margin-top: 5%;
  }

  p {
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
    margin: 5%;
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
        <h2>Vi som skapat GUILTR.I.P!</h2>
        <p>Projektet skapades i samarbete mellan Yrgo och Björk&frihet.</p>
      </div>
      <div className="parent">
        <div className="item">
          <img alt="This is dog" src={lemon}></img>
          <h3>Philip Sunnerholm</h3>
          <h4>UX Design</h4>
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
          <img alt="This is dog" src={lemon}></img>
          <h3>Nelly Svarvare Petrén</h3>
          <h4>Webbutvecklare</h4>
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
          <img alt="This is dog" src={lemon}></img>
          <h3>Linda Tilly </h3>
          <h4>UX Design</h4>
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
          <img alt="This is dog" src={lemon}></img>
          <h3>Niklas Jörgenson</h3>
          <h4>Game Programmer</h4>
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
          <img alt="This is dog" src={lemon}></img>
          <h3>Maja Dandebo</h3>
          <h4>Game Artist</h4>
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

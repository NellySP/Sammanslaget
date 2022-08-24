import styled from "styled-components";
import example from "../../images/glasses-pug.jpg";
import dried from "../../images/dried.jpg";

const StyledAbout = styled.div`
  width: 100vw;
  min-height: 100vh;

  .img-container {
    border-radius: 50%;
  }

  img {
    width: 60%;
    border: 20px solid #f5c71a;
    border-radius: 25px;
    /* border-radius: 50%; rund men den blir inte rund */
  }

  p {
    /* font-size: 16px; verkar vara den förinställda standarden */
    margin-right: 5vw;
    margin-left: 5vw;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 5%;
  }

  .item {
    /* border: 1px solid black; */
    margin: 5%;
    background-color: #ffe135;
    border-radius: 25px;
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
        <p>ca 600 tecken om vad vi gjort i projektet</p>
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
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={dried}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={dried}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
        </div>
        <div className="item">
          <h3>Namn Namn</h3>
          <img alt="This is dog" src={example}></img>
          <p>
            Vilken utbildning du går på Yrgo. Vad du har levererat/ansvarat för
            under projektet. ca 600 tecken. Kanske en Namn Namnlig/privat
            detalj. For skoj.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutPage;

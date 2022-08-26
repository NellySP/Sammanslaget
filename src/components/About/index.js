import styled from "styled-components";
import ux from "../../images/Tilly&Philip.png";
import webb from "../../images/Nellyy.png";
import ga from "../../images/Maja.png";
import gp from "../../images/Niklass.png";
import email from "../../images/email.svg";

const StyledAbout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;

  h2 {
    margin-top: 5%;
    font-family: "Montserrat";
  }

  h3 {
    font-family: "Montserrat";
  }

  h4 {
    font-family: "Montserrat";
  }

  img {
    width: 70%;
    border-radius: 50%;
    margin-top: 5%;
  }

  p {
    margin-right: 10%;
    margin-left: 10%;
    font-family: "Roboto";
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 5%;
    margin-top: 0%;
  }

  .item {
    margin: 5%;
    background-color: #ebccca;
    border-radius: 25px;
  }

  .item p {
    margin-right: 3vw;
    margin-left: 3vw;
    font-family: "Roboto";
  }

  .link-container {
    display: flex;
    /* flex-direction: row; */
    margin-bottom: 3%;
    padding: 3%;
    justify-content: center;
  }

  .div-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .item a {
    margin-bottom: 1vh;
    margin: 1vh;
  }

  a {
    font-family: "Roboto";
    color: black;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  .mail-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mail-image {
    width: 2vw;
    margin: 0%;
    border-radius: 0%;
  }

  @media only screen and (max-width: 700px) {
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
        <h2>Vi som skapat GUILTR.I.P!</h2>
        <p>
          Hej! Vad kul att du hittade hit!<br></br> Vi är en grupp med fem
          studenter som tillsammans skapat denna interaktiva digitala upplevelse
          vid namn GUILTR.I.P.<br></br> Med glimten i ögat ville vi ha ett
          dramatiskt namn som vid första ögonkastet kan upplevas något
          dystopiskt, men namnet syftar på att vi vill säga adjö (R.I.P) till
          vår skuldmedvetenhet kring klimatförändringar och överkonsumtion genom
          att göra informerade val.
        </p>
        <p>
          Vi ville på ett enkelt sätt illustrera och informera om konsekvenserna
          av en persons handlingar eller icke-handlingar, samtidigt som vi ville
          lyfta vikten av den enskilda individens kraft att påverka människor i
          sin omgivning.<br></br> Om tillräckligt många ändrar sin livsstil och
          höjer rösten tillsammans kan vi skapa stor förändring, som gynnar allt
          och alla!{" "}
        </p>
        <p>
          Projektet skapades i samarbete mellan{" "}
          <a href="https://www.yrgo.se/">Yrgo</a> och
          <a href="https://bjorkafrihet.se/"> Björk & frihet</a>.
        </p>
      </div>
      <div className="parent">
        <div className="item">
          <img alt="Picture of a human!" src={ux}></img>
          <h3>Linda Tilly & Philip Sunnerholm</h3>
          <h4>UX Design</h4>
          <p>
            Tilly & Philip ansvarade för projektledning, konceptutveckling och
            innehåll samt såg till att hålla ihop teamet, bland annat med hjälp
            av att dagligen gå igenom allas gemensamma mål. Utöver detta bidrog
            dem med idégenerering, pappers- och figma prototyper, användartester
            samt hade uppsikt över användarvänligheten under alla steg i
            processen.
          </p>
          <div className="mail-container">
            <img className="mail-image" alt="mail icon" src={email}></img>
            <p>lintilly@hotmail.com</p>
          </div>
          <div className="mail-container">
            <img className="mail-image" alt="mail icon" src={email}></img>
            <p>philip.sunnerholm@gmail.com</p>
          </div>
          <div className="div-container">
            <div className="link-container">
              <a href="https://www.linkedin.com/in/ltilly">Tillys Linkedin</a>
            </div>
            <div className="link-container">
              <a href="https://www.linkedin.com/in/philip-sunnerholm-263836148">
                Philips Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img alt="Picture of a human!" src={webb}></img>
          <h3>Nelly Svarvare Petrén</h3>
          <h4>Webbutvecklare</h4>
          <p>
            Nelly har kodat och deployat hemsidan, varit delaktig i webbdesignen
            och ansvarat för att upplevelsen kan integreras och köras online.
          </p>
          <div className="mail-container">
            <img className="mail-image" alt="mail icon" src={email}></img>
            <p>nelly.petren@gmail.com</p>
          </div>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/nelly-petr%C3%A9n-289957180/">
              Linkedin
            </a>
            <a href="https://github.com/NellySP">Github</a>
          </div>
        </div>
        <div className="item">
          <img alt="Picture of a human!" src={gp}></img>
          <h3>Niklas Jörgensen</h3>
          <h4>Game Creator Programmer</h4>
          <p>
            Niklas integrerade de grafiska komponenterna och byggde ett spel
            runtom dem.
          </p>
          <div className="mail-container">
            <img className="mail-image" alt="mail-icon" src={email}></img>
            <p>niklas.jorgensen@hotmail.com </p>
          </div>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/niklas-j%C3%B6rgensen-87a2b71b2/ ">
              Linkedin
            </a>
          </div>
        </div>
        <div className="item">
          <img alt="Picture of a human!" src={ga}></img>
          <h3>Maja Dandebo</h3>
          <h4>Game Artist</h4>
          <p>
            Maja arbetade med projektets visuella komponenter, såsom
            illustrationer och grafik anpassade för en interaktiv digital
            upplevelse.
          </p>
          <div className="mail-container">
            <img className="mail-image" alt="mail-icon" src={email}></img>
            <p>majadandebo@gmail.com</p>
          </div>
          <div className="link-container">
            <a href="https://www.artstation.com/majadandebo">Portfolio</a>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutPage;

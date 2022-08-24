import styled from "styled-components";
import bjork from "../../images/bjork-logo.png";
import yrgo from "../../images/yrgo.png";

const StyledFooter = styled.div`
  width: 100vw;

  h4 {
    font-family: "Roboto";
  }

  .link-container {
    display: flex;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
    font-family: "Roboto";
    margin: 1%;
  }

  p {
    font-family: "Roboto";
  }

  img {
    width: 100px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="link-container">
        <a href="https://bjorkafrihet.se/">
          <img alt="This is dog" src={bjork}></img>
        </a>
        <a href="https://www.yrgo.se/">
          <img alt="This is dog" src={yrgo}></img>
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;

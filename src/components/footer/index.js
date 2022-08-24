import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  /* background-color: #ffe135; */
  /* border: 1px solid black; */

  h4 {
    font-family: "Roboto";
  }

  .link-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
  }
  a {
    color: black;
    text-decoration: underline;
    font-family: "Roboto";
    margin: 1%;
  }

  p {
    font-family: "Roboto";
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Sammanslaget 2022</h4>
      <div className="link-container">
        <a href="https://www.yrgo.se/">Yrgo.se</a>
        <a href="https://bjorkafrihet.se/">björk&frihet</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;

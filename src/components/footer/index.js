import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  /* background-color: #ffe135; */
  /* border: 1px solid black; */

  h4 {
    font-family: "Roboto";
  }

  a {
    color: black;
    text-decoration: underline;
    font-family: "Roboto";
  }

  p {
    font-family: "Roboto";
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Sammanslaget 2022</h4>
      <a href="https://www.yrgo.se/">Yrgo</a>
    </StyledFooter>
  );
};

export default Footer;

import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  background-color: #ffe135;
  border: 1px solid black;

  h1 {
    margin-left: 5%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Sammanslaget 2022</h4>
    </StyledFooter>
  );
};

export default Footer;

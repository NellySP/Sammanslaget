import styled from "styled-components";

const StyledMobile = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin: 5%;
    background-color: pink;
    height: 50vh;
    border-radius: 1%;
  }
  p {
    font-family: "roboto";
  }
  h2 {
    font-family: "Montserrat";
  }
`;

const MobileHome = () => {
  return (
    <StyledMobile>
      <div className="container">
        <h2>Så här kan vi inte ha det!</h2>
        <p>Använd en laptop för att spela spelet!</p>
      </div>
    </StyledMobile>
  );
};

export default MobileHome;

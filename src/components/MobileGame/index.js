import styled from "styled-components";

const StyledMobile = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin: 2%;
    background-color: pink;
    /* border-radius: 25px; */
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

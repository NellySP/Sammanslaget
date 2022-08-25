import styled from "styled-components";

const StyledMobile = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    height: 50vh;
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
        <p>Besök sidan på en laptop för att ta del av upplevelsen!</p>
      </div>
    </StyledMobile>
  );
};

export default MobileHome;

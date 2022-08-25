import styled from "styled-components";

const StyledMobile = styled.div`
  p {
    font-family: "roboto";
  }
`;

const MobileHome = () => {
  return (
    <StyledMobile>
      <p>Använd en laptop för att spela spelet!</p>
    </StyledMobile>
  );
};

export default MobileHome;

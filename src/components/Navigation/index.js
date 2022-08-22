import styled from "styled-components";

const StyledNavigation = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    padding: 1em;
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline black;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </StyledNavigation>
  );
};

export default Navigation;
import styled from "styled-components";

const StyledNavigation = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* justify-content: space-evenly; */

  a {
    font-size: 18px;
    font-family: "Roboto";
    padding: 1em;
    color: black;
    text-decoration: none;
    margin-right: 3%;
  }

  a:hover {
    text-decoration: underline black;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <a href="/">Hem</a>
      <a href="/about">Om oss</a>
    </StyledNavigation>
  );
};

export default Navigation;

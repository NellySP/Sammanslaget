import styled from "styled-components";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import Header from "./components/Header";
import Footer from "./components/footer";

const StyledIndex = styled.div`
  /* overflow-x: hidden; */
  box-sizing: border-box;
  margin: 0%;
  text-align: center;
  max-width: 100%;

  .canvas-container {
    background-color: #ebccca;
  }
`;

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = HomePage;
      break;
    case "/about":
      Component = AboutPage;
      break;
  }
  return (
    <StyledIndex>
      <Header />
      <div className="canvas-container">
        <Component />
      </div>
      <Footer />
    </StyledIndex>
  );
}

export default App;

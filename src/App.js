import "./App.css";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import Header from "./components/Header";

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
    <div className="App">
      <Header />
      <Component />
    </div>
  );
}

export default App;

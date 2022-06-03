import { useContext } from "react";
import About from "./components/about/about.js";
import Intro from "./components/intro/intro.js";
import ProductList from "./components/productlist/productlist.js";
import Toggle from "./components/toggle/toggle.js";
import { ThemeContext } from "./context.js";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />

    </div>
  );
};

export default App;

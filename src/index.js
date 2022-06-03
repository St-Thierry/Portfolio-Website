import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import { ThemeProvider } from "./context.js";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

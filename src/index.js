import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersProvider } from "store/userContext";
import { SocketProvider } from "store/socketContext";
import { ThemeProvider } from "store/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <UsersProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UsersProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

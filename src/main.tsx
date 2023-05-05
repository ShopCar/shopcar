import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import "./styles/theme/fonts.css";
import customTheme from "./styles/theme";
import { ToastProvider } from "./contexts/toastContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <App />
      </ChakraProvider>
    </ToastProvider>
  </React.StrictMode>
);

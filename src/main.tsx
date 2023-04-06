import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import customTheme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

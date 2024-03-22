import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export const ColorModeContext = React.createContext({
  colorMode: "light",
  toggleColorMode: () => {},
});

function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>{children}</ColorModeContext.Provider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ColorModeProvider>
  </React.StrictMode>,
);

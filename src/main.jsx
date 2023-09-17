import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#7bd5cc",
    },
    secondary: {
      main: "#c3a1c3",
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider, extendTheme} from "@chakra-ui/react";
import MyRoute from "./route";
import '@fontsource/roboto/500.css'
import "@fontsource/days-one/400.css"; // Specify weight and style
import '@fontsource/fredoka/500.css'

const theme = extendTheme({
    fonts: {
        brand: {
            "logoFont": `'Days One', sans-serif`,
            "navFont": `'Fredoka', sans-serif`,
            "bodyFont": `'Roboto', sans-serif`,
        }
    },

    colors: {
        brand: {
            'primary-color': "#232323",
            "secundary-color": "#363636"
        },
    },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
        <MyRoute/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)

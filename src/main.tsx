import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider, extendTheme} from "@chakra-ui/react";
import MyRoute from "./route";

const theme = extendTheme({
    colors: {
        brand: {
            'primary-color': "#232323",
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

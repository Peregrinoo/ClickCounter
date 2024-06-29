import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider} from "@chakra-ui/react";
import MyRoute from "./route";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
        <MyRoute/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)

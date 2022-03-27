import React from "react";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3 {
      font-family: 'Righteous', cursive;
    }
`


function App() {
  return (
    <>
      <h1>Other Text</h1>
      <GlobalStyle/>
      <div> Hello Fuck world </div>
    </>
  );
}

export default App;

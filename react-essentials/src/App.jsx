import React, { useState,Fragment } from "react";
import Header from "./Components/Header/Header";
import CoreConceptMain from "./Components/CoreConceptMain";
import Examples from './Components/Examples'

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConceptMain />
        <Examples />
      </main>
    </>
  );
}

export default App;

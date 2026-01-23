import React, { createContext, useState } from 'react';
import CompA from './Components/CompA';
import Compb from './Components/Compb';
import CompC from './Components/CompC';
import CompD from './Components/CompD';

export const myContext=createContext();

const App = () => {
  const[contextValue,setContextValue]=useState(0);
  const[name,setName]=useState("John");
  return (
    <div>
      <h1>App Component={contextValue}</h1>
      <myContext.Provider value={[contextValue,setContextValue]}>
        <CompA/>
        <Compb/>
      </myContext.Provider>

      <myContext.Provider value={{name,setName}}>
        <CompC/>
        <CompD/>
      </myContext.Provider>
    </div>
  );
};

export default App;
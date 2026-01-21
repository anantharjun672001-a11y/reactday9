import React, { useContext } from 'react';
import { myContext } from '../App';
import CompF from './CompF';

const CompE = () => {
    const [contextValue,setContextValue]=useContext(myContext);
    const handlesubmit=()=>{
        setContextValue(0);
    }
    return (
        <div>
            <h1>CompE-{contextValue}</h1>
            <button onClick={handlesubmit}>Click Me</button>
            <CompF/>
        </div>
    );
};

export default CompE;
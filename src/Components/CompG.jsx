import React, { useContext } from 'react';
import { myContext } from '../App';

const CompG = () => {
    const [contextValue,setContextValue]=useContext(myContext);
    return (
        <div>
            <h1>CompG-{contextValue}</h1>
            
        </div>
    );
};

export default CompG;
import React, { useContext } from 'react';
import { myContext } from '../App';

const CompD = () => {
    const { name, setName } = useContext(myContext);
    
       
    return (
        <div>
            <h1>CompD- {name}</h1>
        </div>
    );
};

export default CompD;
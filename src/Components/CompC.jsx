import React, { useContext } from 'react';
import { myContext } from '../App';
import CompD from './CompD';

const CompC = () => {
    const { name, setName } = useContext(myContext);

    const handlechange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>CompC - {name}</h1>
            <input
                type="text"
                value={name}
                onChange={handlechange}
            />
            <CompD/>
        </div>
    );
};

export default CompC;

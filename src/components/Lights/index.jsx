import React from 'react';
import './style.css';
import Light from '../Light'
import {data} from '../Dashboard';

const Lights= ({lights}) => (
    <div className="lights">
    {lights}

    </div>
);

export default Lights;



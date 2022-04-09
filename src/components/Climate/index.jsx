import React, { useState } from 'react';
import './style.css';
import temp from './img/temp.svg';






const Climate = ({ temperature, humidity }) => {

    const [heat, setHeat] = useState(temperature);

    




    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{heat}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button"  onClick={() => setHeat(heat +1)}>+</button>
                <button className="button" onClick={() => setHeat(heat -1)}>-</button>
            </div>
        </div>
    )};

export default Climate;








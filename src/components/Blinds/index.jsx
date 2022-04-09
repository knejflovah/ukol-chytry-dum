import React, { useState } from 'react';
import './style.css';
import blindsopen from './img/blinds-open.svg';
import blindsclosed from './img/blinds-closed.svg';





const Blinds = ({state }) => {

    const [blindson, setBlindson] = useState(state);

 




    return (
        <div className="blinds">
        <div className="blinds__icon">
            <img src={blindson? blindsopen: blindsclosed}/>
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blindson? "button button--active": "button"}onClick={()=>setBlindson(true)}>Otevřeno</button>
            <button className= {blindson? "button":"button button--active" } onClick={()=>setBlindson(false)} >Zavřeno</button>
        </div>
    </div>
    )};

export default Blinds;
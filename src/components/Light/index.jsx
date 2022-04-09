import React, {useState} from 'react';
import './style.css';
import offUrl from './img/light-off.svg'
import onUrl from './img/light-on.svg'

const Light= ({name, state}) =>  {
    const [lightbulb, setLightbulb] = useState(state);
if (lightbulb==='off'){
  setLightbulb(false);
};

    

   
const handleClick = () => {
  if (lightbulb) {
   
    setLightbulb (false);}
    else {setLightbulb (true)

      ;
    }
  }
  ;


  return (
    <div class="light">
    <div className="light__icon">
     
      <img onClick={handleClick}  src={ lightbulb? onUrl: offUrl}/>
    </div>
    <div className="light__name">
      {name}
      
    </div>
  </div>
  ) 
  }
;

export default Light;








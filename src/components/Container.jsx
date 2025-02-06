import React, { useState } from "react";
import Wheel from './Wheel.jsx'
import "../css/Container.css"

export default function Container() {

    const [wheels, setWheels] = useState([
        { angle: 0, speed: 0 },
        { angle: 0, speed: 0 },
        { angle: 0, speed: 0 },
        { angle: 0, speed: 0 }
    ]);


    function generateNewValues() {
        var newWheels = [];
        
        for (let i=0; i<4; i++) {
            const speed = Math.floor(Math.random() * 21);
            const angle = Math.floor(Math.random() * 91);
            newWheels.push({ speed, angle });
        }

        return newWheels;
    }

    function handleClick() {
        setWheels(generateNewValues)
    }

    return(
        <div className="wheels-container">
            <div className="wheel-grid">
                {wheels.map((wheel, index) => (
                    <div key={index} className="cell">
                        <Wheel angle={wheel.angle} speed={wheel.speed} />
                    </div>
                ))}
                {/* <div className="cell"><Wheel angle={wheels[0].angle} speed={wheels[0].speed}/></div>    */}
                {/* <div className="cell"><Wheel angle={wheels[1].angle} speed={wheels[1].speed}/></div>    */}
                {/* <div className="cell"><Wheel angle={wheels[2].angle} speed={wheels[2].speed}/></div>    */}
                {/* <div className="cell"><Wheel angle={wheels[3].angle} speed={wheels[3].speed}/></div>    */}
            </div>
            <button onClick={handleClick}>Generate new Values</button>
        </div>
    )   
}
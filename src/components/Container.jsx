import React, { useEffect } from "react";

import "../css/Container.css"

export default function Container() {
    return(
        <div className="wheel-grid">
            <div className="cell"><Wheel /></div>   
            <div className="cell"><Wheel /></div>   
            <div className="cell"><Wheel /></div>   
            <div className="cell"><Wheel /></div>   
        </div>
    )   
}
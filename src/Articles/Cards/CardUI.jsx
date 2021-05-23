import React from "react";
import './card-style.css';
import useWindowSize from "../../../node_modules/util/useWindowSize";



const Carda = props =>{
    return(
        <div className = "card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-text text-secondary">{props.title}</h4>
                <p className="card-text text-secondary" >{props.text}</p>
                
            
            </div>
        </div>
        
    );
};

export default Carda;
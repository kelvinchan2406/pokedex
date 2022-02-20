import React from "react";


const Card =(props) => {
    const getCard = document.getElementsByClassName("card");
    
    return (
        <div className="card">
            <h1>{props.name}</h1>
        </div>
    //  {getCard[0].onclick(window.location = url);}
    );
}

export default Card;
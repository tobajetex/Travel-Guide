import React from "react";
import Data from "./data";
import Card from "./Card";


export default function App(){
    const cards =Data.map(card=>
    {
     return(
         <Card 
      {...card}  
      />
     )
    }
    )
    return(
        <div>
        {cards}
        </div>
    )
}
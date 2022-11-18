import React from "react";
import Card from "./Card";

function App() {
    return (
        <div>
          <h1 className="heading">Monster Trio</h1>
     <Card 
        name="Monkey.D Luffy" 
        img="https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg" 
        phn="77777777777"
        mail="Luffy@gmail.com"
     />

<Card 
        name="Roronoa Zoro" 
        img="https://avatarfiles.alphacoders.com/849/thumb-84917.jpg" 
        phn="003247582935"
        mail="Zoro_Lost@gmail.com"
     />

<Card 
        name="Vinsmoke Sanji" 
        img="https://i.pinimg.com/736x/e2/b5/a4/e2b5a479d2b097071997535231f0a3d5.jpg" 
        phn="003247582935"
        mail="Vinsmoke_Sanji@gmail.com"
     />
      </div>
    );
  }
  
  export default App;
  
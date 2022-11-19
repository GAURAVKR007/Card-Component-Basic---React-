import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
   return(
      <Card 
         key={contact.id} 
         id={contact.id}
         name={contact.name} 
         img={contact.imgURL} 
         tel={contact.phone} 
         email={contact.email}
      />
   );
}

function App() {
    return (
        <div>
          <h1 className="heading">Monster Trio</h1>

          {contacts.map(createCard)}

          {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}




     {/* <Card 
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
     /> */}

   
      </div>
    );
  }
  
  export default App;
  
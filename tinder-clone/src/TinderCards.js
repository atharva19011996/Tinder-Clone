import React, {useState} from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Pikachu",
            url:"https://freesvgplanet.com/wp-content/uploads/2019/10/pokemon-svg-free-30195-758x505.jpg"
        },
        {
            name: "Togepi",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuDXb7R96JwhowfZ-gMLLyx7eakFWaIuIrw&usqp=CAU"
        }
    ]); 

    const swiped = (direction, nameToDelete) =>{
        console.log("removing: "+ nameToDelete);
        //setLastDirection(direction)
    }

    const outOfFrame= (name) =>{
        console.log(name +" left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                   <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]} onSwipe={(dir)=> swiped(dir, person.name)} onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>    
                    </div>
                   </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

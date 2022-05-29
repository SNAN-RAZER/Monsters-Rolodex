import { Component } from "react";
import Card from "./card.components";

import './cardList.styles.css'
class CardList extends Component
{


constructor()
{
    super();

}

render(){

    const {monsters} = this.props;
    
    return (
        <div className="card-list">
    {
       monsters.map((monster)=>{
         const {id}=monster;
         return (
          <Card  key={id} monster={monster}/>
         )
       })
     }
    </div>
    )
    
}



}
export default CardList;
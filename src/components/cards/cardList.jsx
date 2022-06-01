import Card from "./card.components";

import './cardList.styles.css'

const CardList=({monsters})=>
{




    
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
export default CardList;
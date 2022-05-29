import { Component } from "react";

import './card.styles.css'
class Card extends Component
{

    render()
    {
        const {monster}=this.props;
        const {id,name,email}=monster;
        return(

        < div key={id} className="card-container">
         <img 
         alt={name}
         src={`https://robohash.org/${id}?set=1&setsize=180x180`}
         />
         <h1>{name}</h1>
          <p>{email}</p>
         </div>
        )
    }
}

export default Card;
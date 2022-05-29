import { Component } from "react";

import './search-box.styles.css';
class SearchBox extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <>
            
            <input 
            className='search-box'
            type='search'
            placeholder={this.props.placholder}
            onChange={(event)=>{this.props.onChangehandler(event)}}
            
            />

            </>
        )
    }
}
export default SearchBox;
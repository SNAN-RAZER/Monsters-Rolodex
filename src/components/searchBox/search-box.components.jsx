
import './search-box.styles.css';

const SearchBox=({placholder,onChangehandler})=>
{
   

      return (
            <>
            
            <input 
            className='search-box'
            type='search'
            placeholder={placholder}
            onChange={(event)=>{onChangehandler(event)}}
            
            />

            </>
        )
    
}
export default SearchBox;
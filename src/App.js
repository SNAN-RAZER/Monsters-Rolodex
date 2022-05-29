
import './App.css';
import { Component } from 'react';
import CardList from './components/cards/cardList';
import SearchBox from './components/searchBox/search-box.components';

class App extends Component {

  
constructor(){
super();

this.state={
  monsters:[],
  searchField:''
}
//console.log('constructor');
}


Onsearch(event){

const searchField = event.target.value.toLocaleLowerCase();
this.setState(()=>{
  return {searchField}
})


}
componentDidMount()
{
  //console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState(
    ()=>  {return {monsters:users}},
     ()=>{//console.log(this.state.monsters);
    }
  ))
}

  render (){
 
    const {monsters,searchField} = this.state;
    const Onsearch=this.Onsearch.bind(this);
   
    const filteredMonsters = this.state.monsters.filter(monsters=>{
      return monsters.name.toLocaleLowerCase().includes(searchField);
    })
    return <>

     <div className="App">
      <h1 className='ap-title'>
        Monsters Rolodex

      </h1>
     <SearchBox 
     
     onChangehandler={Onsearch}
     placholder="Search monsters"
     />
     <CardList monsters={filteredMonsters}/>
    </div>
    
    </>
   
  }
}

export default App;

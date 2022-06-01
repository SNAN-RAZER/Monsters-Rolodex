
import './App.css';
import React,{ useEffect, useState } from 'react';
import CardList from './components/cards/cardList';
import SearchBox from './components/searchBox/search-box.components';

const App=()=>{
console.log("render");

  
const [monsters,setMonsters]=useState([]);
const [searchField,setSearchField]=useState('');
const [filteredMonsters,setFilteredMonsters]=useState(monsters);




const Onsearch=(event)=>{

const searchFieldValue = event.target.value.toLocaleLowerCase();
setSearchField(searchFieldValue);





}
useEffect(()=>{
  const newMonsters = monsters.filter(monster=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  })
  setFilteredMonsters(newMonsters);
},[monsters,searchField]);






useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>setMonsters(users));
}
,[])
 


   
    
    return (<div className="App">
    <h1 className='ap-title'>
      Monsters Rolodex

    </h1>
   <SearchBox 
   
   onChangehandler={Onsearch}
   placholder="Search monsters"
   />
   <CardList monsters={filteredMonsters}/>
  </div>)

     
    
    
   
  }


export default App;

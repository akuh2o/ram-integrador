import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import About from './components/About/About'
import Details from './components/Details/Details'

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (char) => {
         fetch(`https://rickandmortyapi.com/api/character/${char}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name){
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   
   const hndleOnClose=(id) => {
      setCharacters((oldChars)=>oldChars.filter((ch)=>ch.id !== +id));
   }

   return (
      <div className='App'>

         <Nav onSearch={onSearch}></Nav>
         <Routes>
            <Route path='/' element={
               <Cards
               hndleOnClose={hndleOnClose} 
               characters={characters} />} />
            <Route path='/details/:id' element={
               <Details />}/>
            <Route path='/about' element={<About/>} />
         </Routes>
      </div>
   );
}

export default App;

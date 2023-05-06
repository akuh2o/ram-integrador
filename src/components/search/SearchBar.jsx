import React, { useState } from "react";
import styles from './SearchBar.module.css';

const { div, input, btn } = styles;

export default function SearchBar({onSearch}) {

   const [character, setCharacter]= useState([]);

   const handleInputChange = (e) =>{
      setCharacter(e.target.value);
      //example.name=e.target.value;
   }

   return (
      <div className={div}>
         <input className={input} type='search' value={character} onChange={handleInputChange}/>
         <button className={btn} onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}

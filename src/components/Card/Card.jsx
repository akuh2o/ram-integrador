import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div >
         <button onClick={onClose}>X</button>
         <h2 className={style.card}>{id}</h2>
         <Link to ={`/details/${id}`}>
         <h2 className={style.nombre}>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={'image no found'} /> 
         <hr/>
      </div>
   );
}

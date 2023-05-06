import React from "react";
import styles from "./Details.module.css"
import { useParams , Link } from "react-router-dom";
import { useState , useEffect } from "react";


const Details = () => {
    const [ character , setCharacter ] = useState ({}) // esto es el estado
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=>response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch((err)=>{
        window.alert("No hay personajes con ese ID")
        });
        return setCharacter({}); //aca retorna el didUnmount
    }, [id]);



    return(
        //hay que ponerle estilos
        <>  
        <Link to='/'>
            <button>To home</button>
        </Link>
        <h1>{character.name}</h1>
        <h2>{character.gender}</h2>
        <h2>{character.status}</h2>
        <h2>{character.origin?.name}</h2>
        <h2>{character.location?.name}</h2>
        <img src = {character.image} alt='not found'/>
        </>
    )
}

export default Details;
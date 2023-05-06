 import Card from '../Card/Card';

export default function Cards({characters, hndleOnClose}) {
   return (
   <div>
   {
      characters.map(({id,name,status,species,gender,origin,image})=>{
         return(
         <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => hndleOnClose(id)}
         />
         );
      })
   }
   </div>
   );
}

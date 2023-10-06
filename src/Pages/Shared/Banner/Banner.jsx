import { useLoaderData } from "react-router-dom";
import Card from "../../Home/Card";
const Banner = () => {
  const places =useLoaderData();
 
  return (

    <div className="mt-4 grid grid-cols-1 gap-4 " 
   
    >
     {
      places.map((place)=>
        <Card key={place.id} place={place}></Card>
      )
    }
 
     </div>
  );
};

export default Banner;
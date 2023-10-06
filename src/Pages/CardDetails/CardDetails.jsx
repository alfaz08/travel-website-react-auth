import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "./SingleCardDetails";
import Home from "../Home/Home";
import Navbar from "../../components/Navbar/Navbar";
const CardDetails = () => {
  const [singleCard,setSingleCard] =useState({})
  const {id} =useParams()
  


  
  const allCard= useLoaderData();

 
  
  useEffect(()=>{

    const findCard=Object.values(allCard).find(card=>card.id===id)
    setSingleCard(findCard);
  },[])
  console.log(singleCard);



  return (
    <div>
     {
       <SingleCardDetails singleCard={singleCard}></SingleCardDetails>
     }
    </div>
  );
};

export default CardDetails;
// const {id} =useParams()
// return (
//   <div>
//     <h2>{id}</h2>
//     <h2>{allCard.image}</h2>
//   </div>
// );
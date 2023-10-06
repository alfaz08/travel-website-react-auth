import Home from "../Home/Home";

import { Link, Navigate } from "react-router-dom";

const SingleCardDetails = ({singleCard}) => {

  const {id,name,location,details,image} = singleCard;

  
  return (

    <div data-aos="fade-right">
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className=" h-52 w-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
   
    
     
  </div>
</div>



</div>
  );
};

export default SingleCardDetails;
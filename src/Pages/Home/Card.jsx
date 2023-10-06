import { Link } from "react-router-dom";

const Card = ({place}) => {
  const {id,name,location,details,image} = place;
  return (
    <div >
    <div className="card card-compact w-96 bg-base-100 shadow-xl"  data-aos="zoom-in-up" >
  <figure><img
  className=" h-52 w-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-center">
     <Link to={`/card/${id}`}>
     <button className="btn btn-primary text-center">Read More</button>
     </Link>
    </div>
  </div>
</div>
</div>
  );
};

export default Card;




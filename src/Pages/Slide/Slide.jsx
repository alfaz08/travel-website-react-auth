
// import { useState } from 'react';
// import './Slide.css'


// const Slide = ({slides}) => {
  
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };
 


  
  
  
//   return (
//     <div className="slide-container">
//       {slides.map(({ id, name, location, details, image }) => (
//         <div key={id} className="slide">
//           <div className="left-side">
//             <h2>{name}</h2>
//             <p>{location}</p>
//             <p>{details}</p>
//           </div>
//           <div className="right-side">
//             <img src={image} alt={name} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };




// export default Slide;
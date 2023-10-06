import { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";
import Card from "./Card";
import './Banner.css'

import { useLoaderData } from "react-router-dom";

import { Outlet } from "react-router-dom";

const Home = () => {
  
 
  
  return (
  
     <div>
     <Banner></Banner>
     <Outlet></Outlet>
     </div>
 
  );
};

export default Home;
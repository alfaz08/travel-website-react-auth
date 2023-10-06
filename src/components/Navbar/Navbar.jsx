import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)


    const handleLogOut =()=>{
      logOut()
      .then(()=>
      {
        toast('user logged out successfully')
      })
      .catch(error=>toast(error))
    }  
  const navLink = <>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/login">Login</NavLink></li>
       <li><NavLink to="/register">Register</NavLink></li>
       <li><NavLink to="/cart">Cart</NavLink></li>
       {
         user&& <>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
       }

  </>

  return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
   <img className=" h-16 w-60" src="../../../src/assets/logo.png" alt=""/>
    
  </div>
  
  <div className="navbar-center hidden lg:flex">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <button className="btn btn-secondary" onClick={handleLogOut}>Logout</button> */}
    {
      user ?
      <>
      <span>{user.email}</span>
      <a onClick={handleLogOut} className="btn btn-secondary">Sign Out</a>
      </>
      :
      <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
    }
  </div>
  <ToastContainer></ToastContainer>
</div>


  );
};

export default Navbar;
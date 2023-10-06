import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";

const Register = () => {
  const {googleLogin} = useContext(AuthContext);
  const {createUser} = useContext(AuthContext)
  const [error,setError] =useState('')

  const handleSocialLogin =(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo =e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);

    if((!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) ){
      const errorMessage = "Password must be at least eight characters long, with at least one letter and one digit."
     setError(errorMessage);
     toast(errorMessage)
    }
    else{
      setError('')
      createUser(email,password)
      .then(res=>console.log(res.user))
      .catch(error=>{
        console.error(error.message)
        toast(error.message)
      })
    }
    // createUser(email,password)
    // .then(res=>console.log(res.user))
    // .catch(error=>toast("there is some error")) 

  }







  return (
    <div>
    <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" required type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
       
       <button onClick={()=>handleSocialLogin(googleLogin)}  className="btn btn-secondary">Googl Login</button>
    
    <div>
      already have a account <button className="btn btn-primary">Login</button>
    </div>
     
    </div>
  </div>
  <ToastContainer/>
</div>


</div>
  );
};

export default Register;
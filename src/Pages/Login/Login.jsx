import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  
   const navigate =useNavigate()
   const location =useLocation()

  const handleSubmit =(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(res=>{console.log(res.user)
     navigate(location?.state?location.state:'/')
    })
      .catch(error=>{
        console.error(error.message)
        toast(error.message)
      })
  }
  
  return (
    <div>
    <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       
       
    
    <div>
      Not Register Please <button className="btn btn-primary">Register</button>
    </div>
     
    </div>
  </div>
  <ToastContainer/>
</div>


</div>
  );
};

export default Login;
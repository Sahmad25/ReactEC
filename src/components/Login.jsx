import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-hot-toast";
//import { AuthContext } from "../contexts/AuthProvider";

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";

const socialList = [
  {
    link: "#",
    iconName: "icofont-github",
    className: "github",
  },
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [data,setData]= useState({
    email:'',
    password:'',
  })
  
  const loginUser = async (e) => {
    e.preventDefault()
    const {email,password} = data
    try {
      const {data} = await axios.post('/login',{email,password});
      if(data.error) {
          toast.error(data.error)
      }else {
          setData({})
          navigate('/')
      }

  }

  catch(error){
       console.log(error)
  }
  }

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={loginUser}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/Signup">Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social icons */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

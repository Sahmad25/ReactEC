import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast';

//import { AuthContext } from "../contexts/AuthProvider";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
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
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const Signup = () => {
    const navigate = useNavigate()
 
const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
})

const registerUser = async (e) => {
    e.preventDefault()
    const {name,email,password} = data 
    try {
        const {data} = await axios.post('/Signup',{name,email,password})
        if(data.error) {
            toast.error(data.error)
        }else {
            setData({})
            toast.success('Login Successful')
            navigate('/Login')
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
            <form className="account-form" onSubmit={registerUser}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" value={data.name} onChange={(e)=> setData({...data, name: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              {/* showing error message 
              <div>
                {errorMessage && (
                  <div className="error-message text-danger">
                    {errorMessage}
                  </div>
                )}
              </div>*/}
              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

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

export default Signup;

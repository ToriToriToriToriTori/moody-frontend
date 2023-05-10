import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/auth-context";
import {useNavigate} from 'react-router-dom';
import './Auth.css';
import { SignIn } from "@phosphor-icons/react";



const Auth = (props) => {

    const auth = useContext(AuthContext);

    let [authMode, setAuthMode] = useState("signin")
    const navigate = useNavigate();

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [formFluids, SetForm] = useState({});

const authsignup = async (event) => {
  event.preventDefault();

  const formFluids = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
  };

  try {
    const response = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formFluids.name,
        email: formFluids.email,
        password: formFluids.password,
        image:
          "https://static.wikia.nocookie.net/shadowandbone/images/8/8f/Kaz_Brekker_Netflix.jpg/revision/latest?cb=20210428172920",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up user.");
    }

    auth.login();
    navigate("/addnew");
  } catch (error) {
    console.error(error);
  }
};

    const authsignin = async (event) => {
        event.preventDefault();
      
        const uemail = formFluids.email, upassword = formFluids.password;
      
        try {
          const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "email": uemail,
              "password": upassword
            }),
          });
      
          if (!response.ok) {
            throw new Error("Notfound");
          } else {
            const data = await response.json();
            
            auth.login(data.userId, data.token);

            navigate("/addnew");
          }
        } catch (err) {
          console.log(err);
        }
      };



    function formChange(event){
        const {name, value} = event.target;
        SetForm(prevFluids => ({ ...prevFluids, [name]: value }));
    }

    if (authMode === "signin") 
    {
            return <div className="page">

            <div className="card">
                <h2>Увійти</h2>
                <span onClick={changeAuthMode}>Створити новий профіль</span>
                <form className="auth-form">
                    <input type="text" name="email" id="email" placeholder="email" onChange={formChange} />
                    <input type="password" name="password" id="password" placeholder="password" onChange={formChange}/>
                    <button type="submit" className="submit" onClick={authsignin} onChange={formChange}>Увійти</button>
                </form>
            </div>

            </div>;
    }else
    {
        return <div className="page">

            <div className="card">
                <h2>Зареєструватися</h2>
                <span onClick={changeAuthMode}>Увійти</span>
                <form  className="auth-form">

                    <input type="text" name='name' id="name" placeholder="name" onChange={formChange}/>
                    <input type="email" name="email" id="email" placeholder="email" onChange={formChange}/>
                    <input type="password" name='password' id="password" placeholder="password" onChange={formChange}/>
                    <input type="password" name="checkpassword" id="checkpassword" placeholder="checkpassword" onChange={formChange}/>

                    <button type="submit" className="submit" onClick={authsignup} onChange={formChange}>Зареєструватися</button>
                </form>
            </div>

            </div>;
    }


};

export default Auth
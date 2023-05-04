import React, { useState } from "react";

import './Auth.css';

function signin(){
    alert('yes');
}

const Auth = (props) => {

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") 
    {
            return <div className="page">

            <div className="card">
                <h2>Увійти</h2>
                <span onClick={changeAuthMode}>Створити новий профіль</span>
                <form action="/profile" className="auth-form">
                    <input type="text" />
                    <input type="password" />
                    <button type="submit" className="submit">Увійти</button>
                </form>
            </div>

            </div>;
    }else
    {
        return <div className="page">

            <div className="card">
                <h2>Зареєструватися</h2>
                <span onClick={changeAuthMode}>Увійти</span>
                <form action="/profile" className="auth-form">
                    <input type="text" />
                    <input type="password" />
                    <button type="submit" className="submit">Зареєструватися</button>
                </form>
            </div>

            </div>;
    }


};

export default Auth
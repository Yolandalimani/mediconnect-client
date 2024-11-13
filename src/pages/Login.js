import React from "react";
import './Login.css'
import Logo from '../assets/logo.jpeg'

function Login (){

    return(
        <div className="login">
            <div className="container">
                <div className="left-side">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    
                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    )
}
export default Login;
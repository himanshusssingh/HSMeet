import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline';



export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>HSMeet Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by HSMeet Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div className='image'>

                   <Spline className='spline' scene="https://prod.spline.design/92WZJcAPh2s0-7JF/scene.splinecode" />

                </div>
            </div>



        </div>
    )
}

import React from 'react'
export default function Home() {
    const myStyle={
        backgroundImage : "linear-gradient(to left, white 50%, #c2d6fb 50%)"
    }
    return (
        <>
        <div style={myStyle} className="homePage min-vh-100 d-flex align-self-center">
            <div className="container d-flex flex-column align-items-center align-self-center">
                <p className="text-primary">WELCOME</p>
                <h1>We Are The MERN Developer</h1>
            </div>
            </div>
        </>
    )
}

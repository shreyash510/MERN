import React from 'react'
import { NavLink } from 'react-router-dom';


export default function ErrorPage() {
    return (
        <>
            <div className="container col-md-5">
                <p style={{ fontSize: '10em', fontWeight: "900" }}>404</p>
                <NavLink to="/"><button className="btn btn-primary">go to home</button></NavLink>
            </div>
        </>
    )
}

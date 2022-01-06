import React, { useState } from 'react'


export default function Signup() {
    const [user, setUser]= useState({});
    const inputevent=(e)=>{
        setUser((preV)=>{
            return{
                ...preV,
                [e.target.name]:e.target.value
            }
        })
    }
    const btnClick=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
            <div className="container w-50 my-5">
                <form className="row g-3">
                    <div className="col-md-5">
                        <label  className="form-label">Your Name</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "name" placeholder='Enter Name...' />
                    </div>
                    <div className="col-md-7">
                        <label  className="form-label">Your email</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "email" placeholder='Enter email...' />
                    </div>
                    <div className="col-md-7">
                        <label  className="form-label">Your Phone</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "phone" placeholder='Enter phone no...' />
                    </div>
                    <div className="col-md-5">
                        <label  className="form-label">Your Profesion</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "profession" placeholder='Enter Profesion...' />
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Your Password</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "pass" placeholder='Enter password...' />
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" onChange={inputevent} name = "cpass" placeholder='Enter Confirm Password...' />
                    </div>

                    <div className="col-12">
                        <button type="submit" onClick={btnClick} className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

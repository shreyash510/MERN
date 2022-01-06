import React from 'react'

export default function About() {
    return (
        <>
            <div className="container w-75 border rounded p-4 my-5">
                <div className="row g-3">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/200/200" alt="" /><br />
                        <div className="work my-3">
                            <a href="/">Work links</a>
                        </div>
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a><br />
                        <a href='/'>simple texts</a>
                    </div>
                    <div className="col-md-4">
                        <h4 className='py-2'>Shreyash Kolhe</h4>
                        <p className="text-primary">Web Developer</p>
                        <p>XXXXXXXX</p><br />
                        <h5 className="my-4">About</h5><br />
                        <p><b>UserId :</b> </p>
                        <p><b>Name :</b></p>
                        <p><b>Email :</b></p>
                        <p><b>Phone :</b></p>
                        <p><b>Profession :</b></p>
                    </div>
                    <div className="col-md-4 position-relative">
                        <div className="editbtn position-relative">
                            <button className="btn btn-primary my-5 position-absolute top-0 start-0">Edit Profile</button>
                        </div>
                        <div className="info position-absolute bottom-0">
                            <p>ALKSDFLKVAJD</p>
                            <p>Shreyash Kolhe</p>
                            <p>shreyshkolhe2001@gmail.com</p>
                            <p>98756321</p>
                            <p>web developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

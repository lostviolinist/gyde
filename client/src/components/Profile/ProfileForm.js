import React, { useState, useEffect } from 'react';
import profile_pic from './niki.jpg';

//import {FaSearch} from './react-icons/lib/fa';

const ProfileForm = ({match}) => {
    return (
        <>
            <div className="container border">


                <div className="container border ">
                    <main style={{marginTop:'6rem'}} className="">
                        <div className="container col-6 text-center border p-3">
                            <img src={profile_pic} alt="" className='border rounded profile_picture img-fluid max-width'/>
                        </div>
                        <ProfileForm />
                    </main>
                </div>

                <div className="container border">
                    <div className="row">
                        <label for="exampleFormControlTextarea1">First Name</label>
                        <input className="form-control" id="first_name" rows="1" placeholder="Billy"></input>
                    </div>

                    <div className="row">
                        <label for="exampleFormControlTextarea1">Last Name</label>
                        <input className="form-control" id="last_name" rows="1" placeholder="Bob"></input>
                    </div>

                    <div className="row">
                        <label for="exampleFormControlTextarea1">Hashtags</label>
                        <input className="form-control" id="hashtags" rows="3" placeholder="AI, HealthHacks, LAHacks"></input>
                    </div>

                    <div className="row">
                        <label for="exampleFormControlTextarea1">Professional Experience</label>
                        <input type="number" min="0" className="form-control" id="pro_exp" rows="1" placeholder="# of years"></input>
                    </div>

                    <div className="row">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="email_address" placeholder="name@example.com"></input>
                    </div>

                    <button type="submit" className="col auto btn btn-primary">Submit</button>
                    
                </div>
            </div>
        </>    
    )
}

export default ProfileForm;
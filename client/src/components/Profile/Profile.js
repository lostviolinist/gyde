import React, { useState, useEffect } from 'react';
import profile_pic from './niki.jpg';
import Badge from 'react-bootstrap/Badge';

//import {FaSearch} from './react-icons/lib/fa';

const Profile = ({match}) => {

    const name = match.params.name

    const [profileInfo, setProfileInfo] = useState({
        user_name: "example123", 
        first_name: "Billy", 
        last_name: "Bob", 
        hashtags: [], 
        prof_exp: 0, 
        email_address: "name@example.com" 
    });

    useEffect(() => {
        const fetchProfile = async () => {

            const result = await fetch(`http://localhost:4000/api/user/${name}`)
            const body = await result.json();
            console.log(body);
            setProfileInfo(body);
        }
        fetchProfile();
        // setProfileInfo({prof_exp:3});
    },[name]);


    return (
        <>
    
        <div style={{height:"55em"}} className="container border" >
            <div className="" >
                <main style={{marginTop:'6rem'}} className="">
                    <div className="container col-6 text-center border p-3">
                        <img src={profile_pic} alt="" className='border rounded profile_picture img-fluid max-width'/>
                    </div>
                </main>
            </div>

            <div className="container">
                <div className="form-group row">
                    <label className="label col-7">First Name </label>
                    <span className="label label-success col-5">{profileInfo.first_name === "" ? "N/A" : profileInfo.first_name }</span>
                </div>

                <div className="form-group row">
                    <label className="label col-7">Last Name </label>
                    <span className="label label-success col-5">{profileInfo.last_name}</span>
                </div>

                <div className="form-group row">
                    <label className="label col-7">Tags </label>
                    <span className="label label-success col-5">{profileInfo.hashtags.length === 0 ? "N/A" : profileInfo.hashtags }</span>
                </div>

                <div className="form-group row">
                    <label className="label col-7">Professional Experience </label>
                    <span className="label label-success col-5">{profileInfo.prof_exp}</span>
                </div>

                <div className="form-group row">
                    <label className="label col-7">Email </label>
                    <span className="label label-success col-5">{profileInfo.email_address}</span>
                </div>
                <a type="submit" className="col auto btn btn-primary" href="./edit">Edit</a>
            </div>
        </div>
        </>    
    )
}

export default Profile;
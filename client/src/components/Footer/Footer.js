import React from 'react';
import home from './home-run.svg';
import chat from './chat.svg';
import user from './user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = props => (
    <>  
        <div className="navbar navbar-fixed-bottom border">
            <a className="nav-item btn " href="/feed"><img src={home} alt=""/></a>
            <a className="nav-item btn" href="/messages"><img src={chat} alt=""/></a>
            <a className="nav-item btn" href="/profile"><img src={user} alt=""/></a>
        </div>
    </>    
);

export default Footer;
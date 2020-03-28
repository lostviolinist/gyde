import React from 'react';
import home from './home-run.svg';
import chat from './chat.svg';
import user from './user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = props => (
    <>  
        <div className="navbar navbar-fixed-bottom border">
            <a className="nav-item btn btn-primary" href="/feed">home</a>
            <a className="nav-item btn btn-primary" href="/feed">messages</a>
            <a className="nav-item btn btn-primary" href="/feed">profile</a>
        </div>
    </>    
);

export default Footer;
import React from 'react';

import home from './home-run.svg';
import chat from './chat.svg';
import user from './user.svg';
import './Footer.css';
//import {FaSearch} from './react-icons/lib/fa';

const Footer = props => (
    <>
        <nav class="navbar navbar-fixed-bottom">
  <span class="nav-item">home</span>
  <span class="nav-item">messages</span>
  <span class="nav-item">profile</span>
</nav>
    </>    
);

export default Footer;
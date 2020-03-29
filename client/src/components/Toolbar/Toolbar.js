import React from 'react';
//import {FaSearch} from './react-icons/lib/fa';
import search from './search.png';
import './Toolbar.css';

const toolbar = props => (
    <nav class="navbar top ">
  <span class="logo">gyde.</span>
  <span class="toolbar_navigation_items"><img src={search} alt=""/></span>
</nav>
);

export default toolbar;
import React from 'react';
//import {FaSearch} from './react-icons/lib/fa';
import search from './search.png';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div> </div>
            <div className="toolbar_logo">gyde.</div>
            <div className="toolbar_navigation_items">
                <img src={search} alt=""/>
            </div>
        </nav>
    </header>
);

export default toolbar;
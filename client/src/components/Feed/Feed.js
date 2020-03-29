import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile_pic from './niki.jpg';
import image from './Image 4.png';
import './Feed.css';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

const Feed = props => (
    <>
    <body>
    <div class="card mt-3">
  <div class="card-body">
      <div class="row">
          <div class="col">
              <img src={profile_pic} alt="" className="border rounded profile_pic"/>
          </div>
          <div class="col-11">
              <div className="username">
                  nikizenfanya
              </div>
              <div>
                  <span className="comp"> works in </span>Microsoft
              </div>
          </div>

      </div>
      <div class="row container mt-5">

          <img src={image} alt="" className="border rounded  image"/>
     
      </div>
      <div className="hashtags">
          <p>#fintech #healthcare #startups</p>
      </div>

      <div className="timestamp">
          1 hour ago
      </div>
    
  </div>
</div>
    </body>
        
    </>
);
export default Feed;
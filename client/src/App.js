import React, { Component } from 'react';
//import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar'
import profile from './niki.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{marginTop:'200px', marginLeft:'35px'}} className="main">
          <div>
            <img src={profile} alt="" className='profile_picture'/>
          </div>
          <div>
            <form>
            <br/><br/>
            <input type="text" id="fname" name="fname" placeholder="Name"/><br/><br/><br/>
            
            <input type="text" id="job" name="job" placeholder="Job"/><br/><br/>

            <input type="number" id="exp" name="exp" placeholder="Professional Experience"/><br/><br/>
            <input type="text" id="hashtag" name="hashtag" placeholder="Hastags"/><br/><br/>

            <input type="submit" value="Submit"/>
            </form>
          </div>
        
        </main>
      </div>
    );

  }
  
}

export default App;

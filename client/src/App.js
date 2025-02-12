import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import ProfileForm from './components/Profile/ProfileForm';
import Feed from './components/Feed/Feed'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './components/Messages/Messages';
import ChatPage from './components/ChatPage/ChatPage';



class App extends Component {
  render() {
   
    
    
    return (
      
      
      <Router>
        
        
        
          <header className="nav">
              <Toolbar /> 
          </header>
          <div className="App container">    



            <Route path="/feed" component={Feed} exact />
            <Route path="/profile/:name" component={Profile} exact />
            <Route path="/profile/edit" component={ProfileForm} exact />
            <Route path="/messages" component={Messages} exact />
            <Route path="/chatpage" component={ChatPage} exact />
            
            
            


          </div>
          <footer className="">
              <Footer />
          </footer>
      </Router>
    );
  }
}

export default App;

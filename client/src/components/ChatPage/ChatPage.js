import React from 'react';
import './ChatPage.css';




const ChatPage = props => (
    <>
    
        <div class="container  mt-4 shadow rounded">
            <div class="list-group mt-3 mb-5">

            
                <div class="list-group-item ">
                    nikizenfanya
                </div>
            
           
            </div>
            <div class="row">
                <div class="col-sm-9">

                </div>
                <div class="col-sm-3">
                    <div class="card receiver">
                       <span>hi! nice to meet you</span> 
                    </div>

                </div>
                
            </div>
        
        

            <div class="row">
                <div class="col-sm-9">
                <div class="card sender">
                       <span>what would you like to know?</span> 
                    </div>
                </div>
                <div class="col-sm-3">
                    

                </div>
                
            </div>
            <div class="row">
                <div class="col-sm-9">

                </div>
                <div class="col-sm-3">
                    <div class="card receiver">
                       <span>how should i prepare  for the digital  economy?</span> 
                    </div>

                </div>
                
            </div>
            <div class="row">
                <div class="col-sm-9">
                    <div class="card sender">
                        <span>maybe you would be interested in digital certificates?</span> 
                    </div>
                <div class="col-sm-3">
                    
                    </div>

                </div>
                
            </div>
            <div>
                <input type="text" class="form-control form-rounded" placeholder="Text input"/>
            </div>
       </div>
       
    
    
    </>

);

export default ChatPage;
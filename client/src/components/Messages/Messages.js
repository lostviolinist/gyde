import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css'


const Messages = props => (
    <>  
    <div class="container">
        
        <div class="list-group mt-5">
            <div class="list-group-item list-group-item-action heading">
            Messages
            </div>
            <a href="/chatpage" class="list-group-item list-group-item-action">
                <div class="row">
                    
                    <div class="col-sm-8">
                        <div className="username">
                                nikizenfanya
                        </div>
                        <div>
                            maybe you would be interested in digital certificates?
                        </div>
                    </div>
                    

                </div>
                
                
            </a>
  
        </div>
    </div>
    
    </>    
);

export default Messages;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navi-bar.css';
import {Link} from 'react-router-dom'

class NaviBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navi-back">
                    <div className ="nav-items">
                        <ul>
                            <li>Home</li>
                            <li>about us</li>
                            <li>contact us</li>
                       
                       
                        </ul>
                    </div>

                </nav>

            </div>
         );
    }
}
 
export default NaviBar;
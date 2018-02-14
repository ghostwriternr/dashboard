import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

class SidebarContent extends Component {
    render() {
        return(
            <div className="sidebar-content">
                <img src={require('../images/mykgp.png')} alt="logo"/>
                <ul>
                    <li>
                        <Link to='/'><i className="fas fa-home color-1"></i> Home</Link>
                    </li>
                    <li>
                        <a><i className="fas fa-graduation-cap color-3"></i> Courses</a>
                    </li>
                    <li>
                        <a><i className="fas fa-print color-4"></i> MFQP</a>
                    </li>
                    <li>
                        <a><i className="fas fa-user color-1"></i> MCMP</a>
                    </li>
                    <li>
                        <a><i className="fas fa-newspaper color-3"></i> Naarad</a>
                    </li>
                    <li>
                        <a><i className="fas fa-calendar-check color-4"></i> GYFT</a>
                    </li>
                    <li>
                        <Link to='/noticeboard'><i className="fas fa-calendar-alt color-1"></i> Noticeboard</Link>
                    </li>
                    <li>
                        <a><i className="fas fa-car color-3"></i> Cab sharing</a>
                    </li>
                    <li>
                        <a><i className="fas fa-phone color-4"></i> Driver status</a>
                    </li>
                    <li>
                        <a><i className="fas fa-shopping-cart color-1"></i> Buy-sell portal</a>
                    </li>
                    <li>
                        <a><i className="fas fa-compass color-3"></i> Lost & found</a>
                    </li>                                                                                                                        
                </ul>
            </div>
        );
    }
}

export default SidebarContent;
import React, { Component } from 'react';
import '../styles/sidebar.css';

class SidebarContent extends Component {
    render() {
        return(
            <div className="sidebar-content">
                <img src={require('../images/mykgp.png')} alt="logo"/>
                <ul>
                    <li>
                        <a><i class="fas fa-home color-1"></i> Home</a>
                    </li>
                    <li>
                        <a><i class="fas fa-graduation-cap color-3"></i> Courses</a>
                    </li>
                    <li>
                        <a><i class="fas fa-print color-4"></i> MFQP</a>
                    </li>
                    <li>
                        <a><i class="fas fa-user color-1"></i> MCMP</a>
                    </li>
                    <li>
                        <a><i class="fas fa-newspaper color-3"></i> Naarad</a>
                    </li>
                    <li>
                        <a><i class="fas fa-calendar-check color-4"></i> GYFT</a>
                    </li>
                    <li>
                        <a><i class="fas fa-calendar-alt color-1"></i> Noticeboard</a>
                    </li>
                    <li>
                        <a><i class="fas fa-car color-3"></i> Cab sharing</a>
                    </li>
                    <li>
                        <a><i class="fas fa-phone color-4"></i> Driver status</a>
                    </li>
                    <li>
                        <a><i class="fas fa-shopping-cart color-1"></i> Buy-sell portal</a>
                    </li>
                    <li>
                        <a><i class="fas fa-compass color-3"></i> Lost & found</a>
                    </li>                                                                                                                        
                </ul>
            </div>
        );
    }
}

export default SidebarContent;
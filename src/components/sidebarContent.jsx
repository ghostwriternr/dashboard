import React from 'react';
import { Link } from 'react-router-dom';
import Navlink from './Navlink';
import '../styles/sidebar.css';

const myKgpLogo = require('../images/mykgp.png');

const SidebarContent = () => (
  <div className="sidebar-content">
    <Link to="/">
      <img src={myKgpLogo} alt="logo" />
    </Link>
    <ul>
      <li>
        <Navlink to="/"><i className="fas fa-home color-1" /> Home</Navlink>
      </li>
      <li>
        <Navlink to="/noticeboard"><i className="fas fa-calendar-alt color-3" /> Noticeboard</Navlink>
      </li>
      <li>
        <Navlink to="/gyft"><i className="fas fa-calendar-check color-4" /> GYFT</Navlink>
      </li>
      <li>
        <a><i className="fas fa-graduation-cap color-1" /> Courses</a>
      </li>
      <li>
        <a><i className="fas fa-print color-3" /> MFQP</a>
      </li>
      <li>
        <a><i className="fas fa-user color-4" /> MCMP</a>
      </li>
      <li>
        <a><i className="fas fa-newspaper color-1" /> Naarad</a>
      </li>
      <li>
        <a><i className="fas fa-car color-3" /> Cab sharing</a>
      </li>
      <li>
        <a><i className="fas fa-phone color-4" /> Driver status</a>
      </li>
      <li>
        <a><i className="fas fa-shopping-cart color-1" /> Buy-sell portal</a>
      </li>
      <li>
        <a><i className="fas fa-compass color-3" /> Lost & found</a>
      </li>
    </ul>
  </div>
);

export default SidebarContent;

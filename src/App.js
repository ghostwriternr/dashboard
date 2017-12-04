import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Home from './components/Home.js';
import MFQP from './components/MFQP.js';
import Naarad from './components/Naarad.js';
import MCMP from './components/MCMP.js';
import GYFT from './components/GYFT.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div className='dashboard'>
                <div className='sidebar'>
                    <h1 className='logo'>IITKGP</h1>
                    <ul className='menu'>
                        <li><i className="fa fa-home" aria-hidden="true"></i><Link className='link' to='/'>Home</Link></li>
                        <li><i className="fa fa-paper-plane-o" aria-hidden="true"></i><Link className='link' to='/1'>MFQP</Link></li>
                        <li><i className="fa fa-newspaper-o" aria-hidden="true"></i><Link className='link' to='/2'>Naarad</Link></li>
                        <li><i className="fa fa-address-book" aria-hidden="true"></i><Link className='link' to='/3'>MCMP</Link></li>
                        <li><i className="fa fa-table" aria-hidden="true"></i><Link className='link' to='/4'>GYFT</Link></li>
                    </ul>
                </div>
                <div className='main'>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/1' component={MFQP} />
                    <Route exact path='/2' component={Naarad} />
                    <Route exact path='/3' component={MCMP} />
                    <Route exact path='/4' component={GYFT} />
                </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;

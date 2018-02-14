import React, { Component } from 'react';
import '../styles/home.css';

class HomeContent extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home">
          <div className="home-content">
            <div id="home-title">Hello, KGP.</div>
            <br />
            <div id="home-subtitle">Welcome to your dashboard (WIP).</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent;
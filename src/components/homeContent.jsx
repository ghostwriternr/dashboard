import React, { Component } from 'react';
import '../styles/home.css';

class HomeContent extends Component {
  render() {
    return (
      <div className="home-content">
        <p id="home-title">Hello, KGP.</p>
        <p id="home-subtitle">Welcome to your dashboard.</p>
      </div>
    )
  }
}

export default HomeContent;
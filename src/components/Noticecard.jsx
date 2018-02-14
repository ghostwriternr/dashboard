import React, { Component } from 'react';
import '../styles/noticeboard.css'

class Noticecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content
    }
  }
  render() {
    return (
      <div class="notice-card">
        {this.state.content}
      </div>
    )
  }
}

export default Noticecard;
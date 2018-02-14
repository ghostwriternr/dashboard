import React, { Component } from 'react';
import '../styles/noticeboard.css'

class Noticecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      attachment: props.attachment
    }
  }
  render() {
    return (
      <div className="notice-card">
        <div className="notice-card-main">
          <div className="card-title">
            {this.state.title}
          </div>
          <br />
          <div className="card-content" dangerouslySetInnerHTML={{__html: this.state.content}} />
        </div>
        <hr />
        <div className="notice-card-buttons">
          <a className="card-attachment" href={this.state.attachment} target="_blank">
            <div className="attachment-button">
              <i className="fas fa-download"></i> Download attachment
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Noticecard;
import React, { Component } from 'react';
import linkifyHtml from 'linkifyjs/html';
import '../styles/noticeboard.css'

class Noticecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      time: props.time,
      content: props.content,
      attachment: props.attachment
    }
    console.log(this.state);
  }
  render() {
    return (
      <div className="notice-card">
        <div className="notice-card-main">
          <div className="card-title">
            {this.state.title}
          </div>
          {(() => {
            if (this.state.time) {
              return (
                <div className="card-date">
                  {this.state.time}
                </div>
              );
            }
          })()}
          <br />
          <div className="card-content" dangerouslySetInnerHTML={{__html: linkifyHtml(this.state.content)}} />
        </div>
        {(() => {
          if (this.state.attachment) {
            return (
              <div>
                <hr />
                <div className="notice-card-buttons">
                  <a className="card-attachment" href={this.state.attachment} target="_blank">
                    <div className="attachment-button">
                      <i className="fas fa-download"></i> Download attachment
                    </div>
                  </a>
                </div>
              </div>
            );
          }
        })()}
      </div>
    )
  }
}

export default Noticecard;
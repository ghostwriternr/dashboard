import React, { Component } from "react";
import "../styles/noticeboard.css";

class Noticecard extends Component {
  render() {
    const { title, time, attachment, linkifiedHTML } = this.props;
    return (
      <div className="notice-card">
        <div className="notice-card-main">
          <div className="card-title">{title}</div>
          {(() => {
            if (time) {
              return <div className="card-date">{time}</div>;
            }
          })()}
          <br />
          <div
            className="card-content"
            dangerouslySetInnerHTML={{
              __html: linkifiedHTML
            }}
          />
        </div>
        {attachment ? (
          <div>
            <hr />
            <div className="notice-card-buttons">
              <a className="card-attachment" href={attachment} target="_blank">
                <div className="attachment-button">
                  <i className="fas fa-download" /> Download attachment
                </div>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Noticecard;

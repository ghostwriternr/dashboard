import propTypes from 'prop-types';
import React from 'react';
import '../styles/noticeboard.css';

const Noticecard = (props) => {
  const {
    title, time, attachment, linkifiedHTML,
  } = props;
  return (
    <div className="notice-card">
      <div className="notice-card-main">
        <div className="card-title">{title}</div>
        {(() => {
          if (time) {
            return <div className="card-date">{time}</div>;
          }
          return '';
        })()}
        <br />
        <div
          className="card-content"
          dangerouslySetInnerHTML={{
            __html: linkifiedHTML,
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
        ''
      )}
    </div>
  );
};

Noticecard.propTypes = {
  title: propTypes.string.isRequired,
  time: propTypes.string,
  attachment: propTypes.string,
  linkifiedHTML: propTypes.string.isRequired,
};

Noticecard.defaultProps = {
  time: '',
  attachment: '',
};

export default Noticecard;

import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Code } from 'react-content-loader';
import axios from 'axios';
import Noticecard from '../components/Noticecard'
import '../styles/section.css';
import '../styles/noticeboard.css';

const veritas_url = 'http://localhost:5001/'
const notice_urls = ['acad_ug', 'acad_pg', 'bcrth', 'public']

class Noticeboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
      notice_type: notice_urls[3],
      notice_next_page: null,
      all_fetched: false
    }
    this.getNotices = this.getNotices.bind(this);
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }

  getNotices(notice_type, next_page) {
    var requestUrl = veritas_url + notice_type
    if (next_page) {
      requestUrl = veritas_url + notice_type + '/page/' + next_page
    }
    axios.get(requestUrl)
    .then(response => {
      this.setState({
        notices: this.state.notices.concat(response['data']['data']),
        notice_next_page: response['data']['next_cursor']
      });
      console.log(this.state);
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notice_next_page === this.state.notice_next_page && !this.state.all_fetched) {
      this.setState({
        all_fetched: true
      });
    }
  }

  _handleWaypointEnter() {
    this.getNotices(this.state.notice_type, this.state.notice_next_page);
  }

  _handleWaypointLeave() {
  }

  render() {
    return (
      <div className="section-main">
        <div className="section-title">Noticeboard</div>
        <div className="notice-list">
          {
            this.state.notices.map((notice, i) =>
              <Noticecard
                key={i}
                title={notice.title}
                content={notice.html}
                attachment={notice.attachment}
              />
            )
          }
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          />
          {(() => {
            if (!this.state.all_fetched) {
              return (
                <Code
                  className='placeholderNotice'
                  height={50}
                  primaryColor='#fff'
                />
              );
            }
          })()}
        </div>
      </div>
    )
  }
}

export default Noticeboard;
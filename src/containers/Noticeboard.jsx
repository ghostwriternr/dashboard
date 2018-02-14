import React, { Component } from 'react';
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
      notices: []
    }
    this.getNotices = this.getNotices.bind(this);
    this.getNotices();
  }
  getNotices() {
    axios.get(veritas_url + notice_urls[0])
    .then(response => {
      this.setState({notices: response['data']['Notices']})
    }).catch(error => {
      console.log(error);
    })
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
        </div>
      </div>
    )
  }
}

export default Noticeboard;
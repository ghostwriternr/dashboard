import React, { Component } from 'react';
import axios from 'axios';
import Noticecard from '../components/Noticecard'
import '../styles/section.css';
import '../styles/noticeboard.css';

class Noticeboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: []
    }
  }
  getNotices() {
    axios.get('http://139.59.19.149:5001/acad_ug')
    .then(response => {
      this.setState({notices: response['Notices']})
    }).catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div className="section-main">
        <div className="section-title">Noticeboard</div>
        <div class="notice-list">
          {
            this.state.notices.map(notice => 
              <Noticecard
                content={notice}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default Noticeboard;
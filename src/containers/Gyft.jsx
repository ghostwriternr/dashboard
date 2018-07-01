import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Timetable from '../components/Timetable';
import '../styles/section.css';
import '../styles/gyft.css';

class Gyft extends Component {
  constructor() {
    super();
    this.state = {
      status: null,
      ttData: null,
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    const uploaders = acceptedFiles.map((uploadedFile) => {
      this.setState({
        status: 'Processing',
      });
      const formData = new FormData();
      formData.append('image', uploadedFile);
      return axios({
        method: 'post',
        url: 'http://localhost:8080/convert',
        data: formData,
        headers: { 'content-type': 'multipart/form-data' },
      }).then((response) => {
        console.log(response);
        this.setState({
          status: null,
          ttData: response.data.timetable,
        });
      });
    });

    axios.all(uploaders).then(() => {
      console.log('Image uploaded');
    });
  }

  render() {
    const { ttData } = this.state;
    return (
      <div className="section-main">
        <div className="section-title">Get Your Freakin' Timetable</div>
        <div className="gyft-cards">
          <div className="gyft-card gyft-ss">
            <div className="gyft-desc">Upload a screenshot of Student's TimeTable from ERP</div>
            <Dropzone
              onDrop={this.onDrop}
              accept="image/*"
              multiple={false}
              className="start-gyft"
            >
              Upload
            </Dropzone>
          </div>
          <div className="gyft-card gyft-pass">
            <div>Enter your ERP credentials</div>
          </div>
          <div className="gyft-card gyft-html">
            <div>Upload the html file for Student's TimeTable page from ERP</div>
          </div>
        </div>
        <div className="gyft-result">
          {
            this.state.status &&
            <div className="gyft-status">{this.state.status}</div>
          }
          {
            this.state.ttData &&
            <div className="gyft-table">
              <Timetable
                ttData={ttData}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Gyft;

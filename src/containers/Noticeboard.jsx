import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Code } from "react-content-loader";
import Noticecard from "../components/Noticecard";
import "../styles/section.css";
import "../styles/noticeboard.css";

import { connect } from "react-redux";
import { fetchNotices as fetchNotices_ } from "../actions/actions";

class Noticeboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeType: 0
    };
    this.props.fetchNotices(0);
  }

  switchType = type_index => {
    this.setState({ noticeType: type_index });
    // fetch first page only
    this.props.fetchNotices(type_index, true);
  };

  _handleWaypointEnter = () => {
    this.props.fetchNotices(this.state.noticeType);
  };

  _handleWaypointLeave = () => {};

  render() {
    const { notices, isFetching } = this.props;
    const { noticeType } = this.state;
    const { data } = notices[noticeType];
    return (
      <div className="section-main">
        <div className="section-title">Noticeboard</div>
        <div className="type-list">
          <ul>
            {["UG", "PG", "BC Roy", "General"].map((str, idx) => (
              <li key={idx}>
                <a
                  className={
                    noticeType === idx ? "active type-button" : "type-button"
                  }
                  onClick={() => this.switchType(idx)}
                >
                  {str}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="notice-list">
          {data.map((notice, i) => <Noticecard key={i} {...notice} />)}
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          />
          {isFetching ? (
            <Code
              className="placeholderNotice"
              height={50}
              primaryColor="#fff"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ noticesData }) => ({
    ...noticesData
  }),
  dispatch => ({
    fetchNotices: (noticeType, firstPageOnly) =>
      dispatch(fetchNotices_(noticeType, firstPageOnly))
  })
)(Noticeboard);

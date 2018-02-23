import propTypes from 'prop-types';
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Code } from 'react-content-loader';
import { connect } from 'react-redux';
import Noticecard from '../components/Noticecard';
import '../styles/section.css';
import '../styles/noticeboard.css';

import fetchNotices_ from '../actions/actions';

const noticeTypes = [
  {
    name: 'UG',
    type: 0,
  }, {
    name: 'PG',
    type: 1,
  }, {
    name: 'BC Roy',
    type: 2,
  }, {
    name: 'General',
    type: 3,
  },
];

class Noticeboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeType: 0,
    };
    this.props.fetchNotices(0);
  }

  switchType = (typeIndex) => {
    this.setState({ noticeType: typeIndex });
    // fetch first page only
    this.props.fetchNotices(typeIndex, true);
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
            {noticeTypes.map(({ name, type }) => (
              <li key={type}>
                <button
                  className={
                    noticeType === type ? 'active type-button' : 'type-button'
                  }
                  onClick={() => this.switchType(type)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="notice-list">
          {data.map(notice => <Noticecard key={notice._id} {...notice} />)}
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
            ''
          )}
        </div>
      </div>
    );
  }
}

Noticeboard.propTypes = {
  fetchNotices: propTypes.func.isRequired,
  notices: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]).isRequired,
  isFetching: propTypes.bool.isRequired,
};

export default connect(
  ({ noticesData }) => ({
    ...noticesData,
  }),
  dispatch => ({
    fetchNotices: (noticeType, firstPageOnly) =>
      dispatch(fetchNotices_(noticeType, firstPageOnly)),
  }),
)(Noticeboard);

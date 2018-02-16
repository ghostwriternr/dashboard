import React, { Component } from 'react';
import linkifyHtml from 'linkifyjs/html';
import chrono from 'chrono-node';
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
    this.parseDateFromText = this.parseDateFromText.bind(this);
    this.parseDateFromText(this.state.content);
  }

  buildCalendarEvent(parsedEvent) {
    let base_url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&';
    let params = 'dates=' + parsedEvent.start.moment().format('YYYYMMDD[T]HHmmss[Z]');
    if (parsedEvent.hasOwnProperty('end')) {
      params += '/' + parsedEvent.end.moment().format('YYYYMMDD[T]HHmmss[Z]');
    }
    params += '&&';
    params += 'text=' + encodeURIComponent(this.state.title);
    return base_url + params;
  }

  parseDateFromText(textToParse) {
    let offset = 0;
    const defaultTags = {
      opening: "<a class='tooltip'>",
      closing: "<span class='tooltiptext'>Add to calendar</span></a>"
    }
    const parseResult = chrono.parse(textToParse);
    for (var i=0; i<parseResult.length; ++i) {
      const result = parseResult[i];
      const eventLink = this.buildCalendarEvent(result);
      const tagsToAdd = defaultTags;
      tagsToAdd.opening = tagsToAdd.opening.slice(0, 3) + "href='" + eventLink + "' target='_blank' " + tagsToAdd.opening.slice(3);
      textToParse = textToParse.slice(0, result.index + offset) + tagsToAdd.opening + textToParse.slice(result.index + offset);
      offset += tagsToAdd.opening.length;
      textToParse = textToParse.slice(
        0, result.index + result.text.length + offset) + tagsToAdd.closing + textToParse.slice(result.index + result.text.length + offset);
      offset += tagsToAdd.closing.length;
    }
    return textToParse;
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
          <div className="card-content" dangerouslySetInnerHTML={{__html: linkifyHtml(this.parseDateFromText(this.state.content))}} />
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
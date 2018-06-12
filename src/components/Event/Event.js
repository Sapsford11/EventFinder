import React from 'react';
import './Event.css';


class Event extends React.Component {
  render() {
    return (
      <div className="Event">
          <div className="image-container">
            <a href={this.props.event.url}target="_blank" rel="noopener noreferrer"><img src={this.props.event.logo} alt=''/></a>
          </div>
          <div className="event-card">
            <p className="date-time">{this.props.event.date}</p>
            <div className="event-title">
              {this.props.event.name}
            </div>
          </div>
      </div>
    );
  }
}

export default Event;

import React from 'react';
import './Event.css';


class Event extends React.Component {

  eventImage() {
    if (this.props.event.logo.url === null) {
            return <img src="no-image-available.png" alt=""/>;
          }
    };

  render() {
    return (
      <div className="Event">
          <div className="image-container">
            <a href={this.props.event.url}target="_blank" rel="noopener noreferrer"><img src={this.props.event.logo} alt='Event logo'/></a>
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

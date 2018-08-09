import React from 'react';
import './EventList.css';
import Event from '../Event/Event';

class EventList extends React.Component {
  render() {
    return (
      <div className="EventList-container">
        <div className="Events">
        {
          this.props.events.map(events => {
            return <Event event={events} key={events.id} />
          })
        }
          <div className="Loader">
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;

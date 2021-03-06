import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { PriorityIndicator } from '../../../global/PriorityIndicator';
import './AgendaItem.css';
import { EventTypeIndicator } from '../../../global/EventTypeIndicator';

/**
 * This is the code for a single item displayed on the react-big-calendar
 * agenda. It displays the title, priority, event type, and dates.
 */
export class AgendaItem extends Component {
  /**
   * Adds one to the priority of the event by sending the info to the
   * redux store/database. If priority exceeds 2, it wraps down to 0.
   * @param event the event to update priority for.
   */
  incrementPriority(event) {
    event.priority = (event.priority + 1) % 3; // Increment, wrap around
    switch (event.event_type) {
      case 'trans':
        this.props.onUpdateTran(event);
        break;
      case 'plan':
        this.props.onUpdatePlan(event);
        break;
      case 'accom':
        this.props.onUpdateAccom(event);
        break;
      default:
        break;
    }
  }

  render() {
    let { localizer, accessors, event } = this.props;

    // Retrieve info in the default way for react-big-calendar
    let title = accessors.title(event);
    let end = accessors.end(event);
    let start = accessors.start(event);

    // Retrieve specialized info
    let priority = event.priority; // May be null
    let eventType = event.event_type; // May be null

    return (
      <Card>
        <Card.Header>
          <span className={'clickable'}>{title}</span>
          <span
            className={'pull-right clickable'}
            onClick={() => this.incrementPriority(event)}
          >
            <PriorityIndicator priority={+priority} />
          </span>
        </Card.Header>
        <Card.Body onClick={() => this.props.onSelectEvent(event)}>
          <div>
            <EventTypeIndicator type={eventType} size={'3x'} />
            <div className="start-date">{localizer.format(start, 'LLL')}</div>
            <div className="end-date">{localizer.format(end, 'LLL')}</div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

AgendaItem.propTypes = {
  event: PropTypes.object.isRequired, // The event to show
  accessors: PropTypes.object.isRequired, // The accessors to figure out
  // what to show from the event object
  localizer: PropTypes.object.isRequired, // moment (for dealing with dates)
  onSelectEvent: PropTypes.func.isRequired // what to do when selected
};

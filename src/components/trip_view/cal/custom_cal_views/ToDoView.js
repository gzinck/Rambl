import PropTypes from 'prop-types';
import React from 'react';

import ToDoItemContainer from './ToDoItemContainer';
import { filterTripToDos } from '../../../../redux/getters/getEvents';
import { CreateEventCard } from './CreateEventCard';

/**
 * This react-big-calendar view displays all events that have a NULL
 * start time. That is, it shows all unscheduled to-dos.
 * It takes much of its structure from the AgendaView component.
 */
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.renderToDo = this.renderToDo.bind(this);
  }

  render() {
    let { events } = this.props;

    // Gets just events with no associated start time.
    events = filterTripToDos(events);

    // Sort by date (the + turns them into numbers that are easily sortable)
    events.sort((a, b) => +b.priority - +a.priority);

    // Figure out what to show for the to-do list
    // (depends on if there are any events)
    let agendaContent;
    if (events.length !== 0) {
      agendaContent = (
        <div className="rbc-agenda-content" ref="content">
          <CreateEventCard onCreateEvent={this.props.onSelectSlot} />
          {events.map((event) => {
            return this.renderToDo(event);
          })}
        </div>
      );
    } else {
      agendaContent = (
        <span className="rbc-agenda-empty">
          <CreateEventCard onCreateEvent={this.props.onSelectSlot} />
        </span>
      );
    }

    return <div className="rbc-agenda-view">{agendaContent}</div>;
  }

  /**
   * This renders a single to-do (event)
   * @param event the event to render (with no dates)
   * @returns {*} JSX for the event view
   */
  renderToDo(event) {
    let { accessors, localizer } = this.props;

    return (
      <ToDoItemContainer
        key={event.event_type + '_' + event.e_id}
        event={event}
        accessors={accessors}
        localizer={localizer}
        onSelectEvent={this.props.onSelectEvent}
      />
    );
  }
}

ToDoList.propTypes = {
  events: PropTypes.array, // The events to show
  accessors: PropTypes.object.isRequired, // How to get the data from event objects
  localizer: PropTypes.object.isRequired, // moment localizer for dates
  onSelectSlot: PropTypes.func.isRequired // what to do when want to create new!
};

// This is required for react-big-calendar
ToDoList.title = () => {
  return 'Trip To-Dos';
};

// This is required for react-big-calendar
ToDoList.navigate = () => {
  return null;
};

export default ToDoList;

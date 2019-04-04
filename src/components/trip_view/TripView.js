import React, { Component } from 'react';
import TripCalContainer from './cal/trip_cal/TripCalContainer';
import { CalViewOptions } from './cal/CalViewOptions';
import TripNavContainer from './TripNavContainer';
import './TripView.css';

/**
 * Placeholder component for the view that allows a user to view
 * all the events contained within a trip. It currently contains
 * two pieces: the calendar view itself (which will eventually
 * have an agenda view and a to-do view) as well as an options
 * component which can be placed within a sidebar down the road
 * (the options are completely separate from the calendar
 * component).
 */
export class TripView extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <TripNavContainer />
        </div>
        <div className="content-top">
          <div className="cal-options container-left">
            <CalViewOptions history={this.props.history} />
          </div>
          <div className="container-right">
            <TripCalContainer location={this.props.location} />
          </div>
        </div>
      </div>
    );
  }
}

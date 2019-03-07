/**
 * Gets the start and end times of a trip by going through the state
 * and comparing start/end times of various events. If there is no
 * start, then the trip_start is null. If there is no end, then the
 * trip_end is equal to trip_start.
 * @param state the state of the redux store.
 * @param tripId the id of the trip to find the duration for
 * @returns {{trip_end: *, trip_start: *}}
 */
export function getTripTimes(state, tripId) {
  let plans = state.plans.plans[tripId];
  let accoms = state.accoms.accoms[tripId];
  let trans = state.trans.trans[tripId];

  // Get all the values from the dictionaries (just get the raw event objects
  // without worrying about their event ids). It only gets them if the section
  // is not null.
  let events = [];
  if (plans != null) events = [...Object.values(plans)];
  if (accoms != null) events = [...events, ...Object.values(accoms)];
  if (trans != null) events = [...events, ...Object.values(trans)];

  let tripStart = null;
  let tripEnd = null;

  // Go through all of the events
  events.forEach((event) => {
    if (event.begin_time !== null) {
      if (tripStart === null) tripStart = event.begin_time;
      else if (tripStart > event.begin_time) tripStart = event.begin_time;
    }
    if (event.end_time !== null) {
      if (tripEnd === null) tripEnd = event.end_time;
      else if (tripEnd < event.end_time) tripEnd = event.end_time;
    }
  });

  if (tripEnd == null) tripEnd = tripStart;

  return { trip_start: tripStart, trip_end: tripEnd };
}

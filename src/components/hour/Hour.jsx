import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
// import { events } from '../../../src/gateway/events.js';

const Hour = ({ dataHour, hourEvents, setEvents }) => {
  // const deleteEvent = () => {
  //   console.log('e.target');
  // }

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;

        return (
          <Event
            key={id}
            id={id}
            setEvents={setEvents}
            //calculating event height = duration of event in minutes
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};

export default Hour;

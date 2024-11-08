import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const today = new Date();
  const todayDate = today.getDate();
  // console.log('todayDate');
  // console.log(todayDate);
  // console.log(weekDates);
  // console.log(weekDates[3].getDate() === todayDate);

  const listItemClass = `"day-label__day-name" ${today}`;
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        < div className="calendar__day-label day-label" >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className={`'day-label__day-number' ${todayDate === dayDate.getDate() ? 'day-label__today-number' : ''}`}>{dayDate.getDate()}</span>
        </div>
      ))
      }
    </header >
  );
};

export default Navigation;

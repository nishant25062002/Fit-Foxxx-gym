// /** @jsx jsx */
import React from "react";

const ScheduleLinks = ({ setDay , day}) => {
  return (
    <div className="links">
      <button className={day === 'Monday' ? 'activeButton' : ''} onClick={() => setDay("Monday")}>
        Monday
      </button>
      <span>/</span>
      <button className={day === 'Tuesday' ? 'activeButton' : ''} onClick={() => setDay("Tuesday")}>
        Tuesday
      </button>
      <span>/</span>
      <button className={day === 'Wednesday' ? 'activeButton' : ''} onClick={() => setDay("Wednesday")}>
        Wednesday
      </button>
      <span>/</span>
      <button className={day === 'Thursday' ? 'activeButton' : ''} onClick={() => setDay("Thursday")}>
        Thursday
      </button>
      <span>/</span>
      <button className={day === 'Friday' ? 'activeButton' : ''} onClick={() => setDay("Friday")}>
        Friday
      </button>
    </div>
  );
};

export default ScheduleLinks;

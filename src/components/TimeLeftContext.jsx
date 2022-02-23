import { createContext, useState, useEffect } from "react";

const TimeLeftContext = createContext();

export const TimeLeftProvider = ({ children }) => {
  let year = new Date().getFullYear();
  const now = new Date().getTime();
  let birthdayDate = new Date(`06/20/${year}`).getTime();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [seconds, setSeconds] = useState(),
    [minutes, setMinutes] = useState(),
    [hours, setHours] = useState(),
    [days, setDays] = useState();

  let timeLeft = birthdayDate - now;

  const setTimeLeft = () => {
    if (timeLeft <= 0) {
      year += 1;
      birthdayDate = new Date(`06/20/${year}`).getTime();
      timeLeft = birthdayDate - now;
    }
    setSeconds(`${Math.floor((timeLeft % minute) / second)}`.padStart(2, "0"));

    setMinutes(`${Math.floor((timeLeft % hour) / minute)}`.padStart(2, "0"));

    setHours(`${Math.floor((timeLeft % day) / hour)}`.padStart(2, "0"));

    setDays(`${Math.floor(timeLeft / day)}`.padStart(2, "0"));
  };

  useEffect(() => {
    const timer = () => setTimeout(() => setTimeLeft(), 1000);
    timer();
    clearTimeout(timer);
  });

  return (
    <TimeLeftContext.Provider value={{ seconds, minutes, hours, days }}>
      {children}
    </TimeLeftContext.Provider>
  );
};

export default TimeLeftContext;

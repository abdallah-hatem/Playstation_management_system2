"use client";
import React, { createContext, useState, useEffect } from "react";

const StopwatchContext = createContext();

function StopwatchProvider({ children }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const storedTime = localStorage.getItem("stopwatchTime");
    const storedRunning = localStorage.getItem("stopwatchRunning");

    if (storedTime && storedRunning) {
      setTime(parseInt(storedTime, 10));
      setRunning(storedRunning === "true");
    }
  }, []);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  useEffect(() => {
    localStorage.setItem("stopwatchTime", time.toString());
    localStorage.setItem("stopwatchRunning", running.toString());
  }, [time, running]);

  function startStopwatch() {
    setRunning(true);

    if (!localStorage.getItem("startTime")) {
      let newDate = new Date();
      localStorage.setItem("startTime", newDate.toLocaleTimeString());
    }
  }

  function stopStopwatch() {
    setRunning(false);
  }

  function resetStopwatch() {
    setTime(0);
    setRunning(false);
    localStorage.removeItem("startTime");
  }

  function formatTime(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return [hours, minutes, seconds];
  }

  function charge(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60);

    let hourPrice = 40;
    let minPrice = hourPrice / 60;

    let charge = (hours * hourPrice + minutes * minPrice).toFixed(2);

    return charge;
  }

  function stTime() {
    let theTime = localStorage.getItem("startTime");
    if (theTime) {
      return theTime;
    }
  }

  const contextValue = {
    time,
    running,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    formatTime,
    charge,
    stTime,
  };

  return (
    <StopwatchContext.Provider value={contextValue}>
      {children}
    </StopwatchContext.Provider>
  );
}

export { StopwatchContext, StopwatchProvider };

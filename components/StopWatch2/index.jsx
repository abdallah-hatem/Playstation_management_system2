"use client";

import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import CardComponent from "../CardComponent";

export default function StopWatch2({ title, id, type, hourRate }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const previousTime = localStorage.getItem("stopwatchTime" + id);
    const previousIsRunning = localStorage.getItem("stopwatchIsRunning" + id);

    if (previousTime) {
      setTime(parseInt(previousTime));
    }

    if (previousIsRunning === "true") {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem("stopwatchTime" + id, time.toString());
    localStorage.setItem("stopwatchIsRunning" + id, isRunning.toString());
  }, [time, isRunning]);

  const startTimer = () => {
    setIsRunning(true);

    if (!localStorage.getItem("startTime" + id)) {
      let newDate = new Date();
      localStorage.setItem(
        "startTime" + id,
        newDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    localStorage.removeItem("stopwatchTime" + id);
    localStorage.removeItem("stopwatchIsRunning" + id);
    localStorage.removeItem("startTime" + id);
  };

  function charge(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60);

    let hourPrice = hourRate;
    let minPrice = hourPrice / 60;

    let charge = (hours * hourPrice + minutes * minPrice).toFixed(2);

    return charge;
  }

  function formatTime(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return [hours, minutes, seconds];
  }

  function timer() {
    let timeFormat = `${formatTime(time)[0]}:${formatTime(time)[1]}:${
      formatTime(time)[2]
    }`;

    return timeFormat;
  }

  function getStartTime() {
    return localStorage.getItem("startTime" + id);
  }

  const buttons = [
    { title: "Start", onClick: startTimer },
    { title: "Stop", onClick: pauseTimer },
    { title: "Reset", onClick: resetTimer },
  ];

  return (
    <CardComponent
      style={{ width: "300px", margin: 10 }}
      styleContent={cardContent}
      title=""
    >
      <div className="device-cont">
        <div className="title-cont">
          <span>{title}</span>
          <span>{type}</span>
        </div>
        <div className="top-cont">
          <span className="timer">{timer()}</span>

          <div className="info-cont">
            <p>Start : {getStartTime()}</p>
            <p>charge: ${charge(time)}</p>
          </div>
        </div>

        <div className="bot-cont">
          <div className="bot-1">
            {buttons.map((el, index) => (
              <ButtonComponent
                style={{ width: 60 }}
                title={el.title}
                onClick={el.onClick}
                key={index}
              />
            ))}
          </div>
          <ButtonComponent style={{ marginTop: 10 }} title="Done" />
        </div>
      </div>
    </CardComponent>
  );
}

const cardContent = {
  display: "flex",
  flexDirection: "column",
  padding: 10,
};

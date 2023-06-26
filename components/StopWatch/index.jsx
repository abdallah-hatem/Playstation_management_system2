"use client";
import { StopwatchContext } from "../../context/stopWatchContext";
import { useContext, useEffect } from "react";
import CardComponent from "../CardComponent";
import ButtonComponent from "../ButtonComponent";
import "./style.scss";

export default function StopWatch({ title = "title" }) {
  const {
    time,
    running,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    formatTime,
    charge,
    stTime,
  } = useContext(StopwatchContext);

  function timer() {
    let timeFormat = `${formatTime(time)[0]}:${formatTime(time)[1]}:${
      formatTime(time)[2]
    }`;

    return timeFormat;
  }

  const buttons = [
    { title: "Start", onClick: startStopwatch },
    { title: "Stop", onClick: stopStopwatch },
    { title: "Reset", onClick: resetStopwatch },
  ];

  return (
    <CardComponent
      style={{ width: "280px" }}
      styleContent={cardContent}
      title={title}
    >
      <div className="top-cont">
        <span className="timer">{timer()}</span>
        <p className="charge">charge: {charge(time)}</p>
        <p>Start Time: {stTime()}</p>
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
    </CardComponent>
  );
}

const cardContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
};

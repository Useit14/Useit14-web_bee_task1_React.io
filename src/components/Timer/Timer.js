import React, { useEffect, useRef, useState } from 'react';
import play from './play.png';
import refresh from './refresh.png';

function Timer(props) {
  let timerId = 0;
  let timerRefresh = 0;
  const [show, setShow] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  const getSeconds = () => {
    return props.countSeconds - (hour * 3600 + minutes * 60);
  };
  const getMinutes = () => {
    return Math.floor((props.countSeconds - hour * 3600) / 60);
  };
  const getHour = () => {
    return Math.floor(props.countSeconds / 3600);
  };

  useEffect(() => {
    if (props.countSeconds > 0) {
      timerId = setTimeout(() => {
        props.setCountSeconds(props.countSeconds + 1);
        printTimer();
      }, 1000);
    }
  });

  function startTimer() {
    if (props.countSeconds == 0) {
      props.setCountSeconds(props.countSeconds + 1);
    }
  }

  function printTimer() {
    setSeconds(getSeconds());
    setMinutes(getMinutes());
    setHour(getHour);
  }

  function refreshTimer() {
    clearTimeout(timerId);
    clearTimeout(timerRefresh);
    timerRefresh = setTimeout(() => {
      props.setCountSeconds(1);
      printTimer();
    }, 1000);
  }

  const dropNavigationClick = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div id="content">
      <div className="content-sectoring">
        <div className="row content-block-style content-block-sectoring">
          <div className="row justify-content-between">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <p>Timer</p>
            </div>
            <div className="toolbar col-lg-1 col-md-3 col-sm-2 col-5 justify-content-end">
              <a>
                <img onClick={() => startTimer()} src={play} alt="" />
              </a>
              <a
                data-bs-toggle="collapse"
                className={show == true ? 'arrow-up' : 'arrow-down'}
                onClick={() => dropNavigationClick()}
              ></a>
              <a>
                <img onClick={() => refreshTimer()} src={refresh} alt="" />
              </a>
            </div>
          </div>
          <div
            className={`timer map-collapse collapse ${
              show == true ? 'show' : ''
            }`}
          >
            <span id="hour">{hour}</span>
            <span id="minutes">{minutes}</span>
            <span id="seconds">{seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;

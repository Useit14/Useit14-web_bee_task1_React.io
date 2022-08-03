import React, { useEffect, useRef, useState } from 'react';
import play from './play.png';
import refresh from './refresh.png';
import classNames from 'classnames';

function Timer(props) {
  const [show, setShow] = useState(true);

  const getSeconds = () => {
    return props.countSeconds - (hour * 3600 + minutes * 60);
  };
  const getMinutes = () => {
    return Math.floor((props.countSeconds - hour * 3600) / 60);
  };
  const getHour = () => {
    return Math.floor(props.countSeconds / 3600);
  };

  let hour = getHour();
  let minutes = getMinutes();
  let seconds = getSeconds();

  const dropNavigationClick = () => {
    setShow(!show);
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
                <img onClick={() => props.startTimer()} src={play} alt="" />
              </a>
              <a
                data-bs-toggle="collapse"
                className={show == true ? 'arrow-up' : 'arrow-down'}
                onClick={() => dropNavigationClick()}
              ></a>
              <a>
                <img
                  onClick={() => props.refreshTimer()}
                  src={refresh}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div
            className={classNames(
              'timer',
              'map-collapse',
              'collapse',
              show && 'show'
            )}
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

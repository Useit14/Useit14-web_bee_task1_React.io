import React from "react";
import close from './close.png'
import play from './play.png'
import refresh from './refresh.png'

function Timer() {
    let countSeconds = 0;
    let timerId = 0;

    function startTimer() {
        if (countSeconds === 0) {
            timerId = setInterval(function () {
                countSeconds++;
                printTimer();
            }, 1000);
        } else {
            refreshTimer();
        }
    }

    function printTimer() {
        const seconds = document.getElementById('seconds');
        const minutes = document.getElementById('minutes');
        const hour = document.getElementById('hour');
        if (seconds) {
            hour.textContent = Math.floor(countSeconds / 3600);
            minutes.textContent = Math.floor(
                (countSeconds - hour.textContent * 3600) / 60,
            );
            seconds.textContent =
                countSeconds - (hour.textContent * 3600 + minutes.textContent * 60);
        }
    }

    function refreshTimer() {
        clearInterval(timerId);
        countSeconds = 0;
        startTimer();
    }

    const dropNavigationClick = propId => {
        let idCollapsePost = 'collapse-post-content' + propId
        let idCollapseImage = 'collapse-img' + propId
        const collapsePost = document.getElementById(idCollapsePost)
        collapsePost.classList.toggle('show')
        const imgCollapse = document.getElementById(idCollapseImage)
        imgCollapse.classList.toggle('arrow-up')
        imgCollapse.classList.toggle('arrow-down')
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
                                <img onClick={() => startTimer()} src={play} alt=''/>
                            </a>
                            <a
                                data-bs-toggle="collapse"
                                onClick={() => dropNavigationClick(1)}
                                className="arrow-up"
                                id="collapse-img1"
                            >
                            </a>
                            <a>
                                <img onClick={() => refreshTimer()} src={refresh} alt=''/>
                            </a>

                            <img src={close} alt=''/>
                        </div>
                    </div>
                    <div id="collapse-post-content1" className="timer map-collapse collapse show">
                        <span id="hour">0</span>
                        <span id="minutes">0</span>
                        <span id="seconds">0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer
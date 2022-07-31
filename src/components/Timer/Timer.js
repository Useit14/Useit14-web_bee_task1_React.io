import React, {useEffect} from "react";
import close from './close.png'
import play from './play.png'
import refresh from './refresh.png'

function Timer(props) {

    let timerId=0

     const getSeconds = () => {
        return props.countSeconds - (props.hour * 3600 + props.minutes * 60);
    }
    const getMinutes = () => {
        return  Math.floor((props.countSeconds - props.hour * 3600) / 60);
    }
    const getHour = () =>{
        return  Math.floor(props.countSeconds / 3600);
    }


    useEffect(()=>{
        if(props.countSeconds>0){
            timerId=setTimeout(()=>{
                props.setCountSeconds(props.countSeconds+1)
                printTimer()
            },1000)
        }
    })

    function printTimer() {
        props.setSeconds(getSeconds)
        props.setMinutes(getMinutes)
        props.setHour(getHour)
    }


    function refreshTimer() {
         clearTimeout(timerId)
        props.setCountSeconds(1)
    }

    const dropNavigationClick = propId => {
        let idCollapsePost = 'collapse-post-content' + propId
        let idCollapseImage = 'collapse-img' + propId
        const collapsePost = document.getElementById(idCollapsePost)
        if(collapsePost){
            collapsePost.classList.toggle('show')
        }
        const imgCollapse = document.getElementById(idCollapseImage)
        if (imgCollapse){
            imgCollapse.classList.toggle('arrow-up')
            imgCollapse.classList.toggle('arrow-down')
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
                                <img onClick={() => props.setCountSeconds(props.countSeconds+1)} src={play} alt=''/>
                            </a>
                            <a
                                data-bs-toggle="collapse"
                                onClick={() => dropNavigationClick(2)}
                                className="arrow-up"
                                id="collapse-img2"
                            >
                            </a>
                            <a>
                                <img onClick={() => refreshTimer()} src={refresh} alt=''/>
                            </a>

                            <img src={close} alt=''/>
                        </div>
                    </div>
                    <div id="collapse-post-content2" className="timer map-collapse collapse show">
                        <span  id="hour">{props.hour}</span>
                        <span  id="minutes">{props.minutes}</span>
                        <span  id="seconds">{props.seconds}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer
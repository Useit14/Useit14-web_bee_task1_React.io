import React, { useState } from 'react';
import preload from './preloader.gif';
import refresh from './refresh.png';

function Map() {
  const [show, setShow] = useState('show');
  const [arrow, setArrow] = useState('arrow-up');
  const [preloader, setPreloader] = useState(true);

  function mapLoad() {
    setPreloader(false);
  }

  const dropNavigationClick = () => {
    if (arrow == 'arrow-up') {
      setArrow('arrow-down');
    } else {
      setArrow('arrow-up');
    }
    if (show == 'show') {
      setShow(' ');
    } else {
      setShow('show');
    }
  };

  return (
    <div id="content">
      <div className="content-sectoring">
        <div className="row content-block-style content-block-sectoring">
          <div className="row justify-content-between">
            <div className="col-lg-1 col-md-2 col-sm-2 col-5">
              <p>Basic map</p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 col-4 justify-content-end d-flex toolbar">
              <div>
                <a
                  data-bs-toggle="collapse"
                  onClick={() => dropNavigationClick()}
                  className={arrow}
                ></a>
              </div>
            </div>
          </div>
          <div className={`map-collapse collapse ${show}`}>
            <div
              className={`row align-items-center justify-content-center content-block-style content-block-sectoring ${
                preloader == true ? 'map-preloader' : 'map-preloader-hidden'
              }`}
            >
              <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                <img src={preload} alt="" />
              </div>
            </div>
            <div className="row map content-block-style justify-content-center content-block-sectoring">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72959.56015355242!2d37.92433905!3d55.14851924999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1655039603927!5m2!1sru!2sru"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => mapLoad()}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

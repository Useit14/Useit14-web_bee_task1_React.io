import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import activity from './acivity.png';
import arrowDown from './arrowDown.png';
import arrowLeft from './arrowLeft.png';
import friends from './friends.png';
import map from './map.png';
import notes from './notes.png';
import photos from './photos.png';
import settings from './settings.png';
import tasklist from './tasklist.png';
import time from './time.png';
import Union1 from './Union1.png';
import Union2 from './Union2.png';
import Union3 from './Union3.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const goBack = () => navigate(-1);

  const dropNavigationClick = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm menu-sectoring justify-content-between">
        <div>
          <a onClick={goBack}>
            <img src={arrowLeft} alt="" />
          </a>
        </div>
        <div
          className="navbar-collapse collapse menu-left-style"
          id="collapseMenu"
        >
          <ul className="nav col-lg-6 col-md-7 col-sm-auto col-xs-6">
            <li className="nav-item active">
              <a className="nav-link">
                {' '}
                <strong>User Pages</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">-</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Profile</a>
            </li>
          </ul>
        </div>
        <ul className="nav col-lg-4 justify-content-end menu-right-style">
          <li className="nav-item">
            <div>
              <a>
                <img src={Union1} alt="" />
              </a>
            </div>
            <div>
              <a className="nav-link">Statistics</a>
            </div>
          </li>
          <li className="nav-item">
            <div>
              <a>
                <img src={Union2} alt="" />
              </a>
            </div>
            <div>
              <a className="nav-link">Invoices</a>
            </div>
          </li>
          <li className="nav-item">
            <div>
              <a>
                <img src={Union3} alt="" />
              </a>
            </div>
            <div>
              <a className="nav-link">Shedule</a>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg submenu-style submenu-sectoring bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSubmenu"
          aria-expanded="false"
          onClick={() => dropNavigationClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${
            show == true ? 'show' : ''
          }`}
        >
          <ul className="nav col-lg-4 submenu bg-light">
            <li className="nav-item">
              <div>
                <img
                  src={activity}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <Link to="/index">Activity</Link>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img
                  src={map}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <Link to="/map">Map</Link>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img
                  src={time}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <Link to="/timer">Timer</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav col-xl-6 col-lg-7 submenu bg-light justify-content-end">
            <li className="nav-item">
              <div>
                <img
                  src={notes}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <a>Notes</a>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img
                  src={friends}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <a>Friends</a>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img src={tasklist} alt="" />
                <Link to="/resume">Resume</Link>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img
                  src={photos}
                  className="d-inline-block align-text-center"
                  alt=""
                />
                <a>Photos</a>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <img src={settings} alt="" />
                <img src={arrowDown} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header
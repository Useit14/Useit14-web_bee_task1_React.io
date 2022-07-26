import React from "react";
import avatar from './avatar.jpg';
import balance from './balance.png';
import comments from './comments.png';
import connections from './connections.png';
import events from './events.png';
import eye from './eye.png';
import friends from './friends.png';
import hh from './hh.png';
import myProfile from './myProfile.png';
import poster from './poster.jpg';
import settings from './settings.png';
import telegram from './telegram.png';
import time from './time.png';
import twitter from './twitter.png';

function Index() {
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
                <div className="row justify-content-between">
                    <div className="col-lg-9">
                        <div className="row content-block-style content-left-block-sectoring">
                            <div>
                                <img className="img-fluid" src={poster} alt=''/>
                            </div>
                            <div className="comment">
                                <div className="d-flex comment-header">
                                    <div>
                                        <img src={comments} alt=''/>
                                    </div>
                                    <div className="d-flex-inline">
                                        <a>Jason Anderson</a>
                                        <span>commented:</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <div>
                                        Don’t sit and wait. Get out there, feel life. Touch the
                                        sun, and immerse in the sea. Keep love in your heart. A
                                        life without it is like a sunless garden when the flowers
                                        are dead. Because summer is passion, memories, light
                                        breeze, the sun that appears on the skin and caresses the
                                        face.
                                    </div>
                                    <div className="author">– Jason, <i>10:30 am</i></div>
                                </div>
                                <div className="d-flex comment-footer">
                                    <div>
                                        <img src={eye} alt=''/>
                                        <span>432</span>
                                    </div>
                                    <div>
                                        <img src={comments} alt=''/>
                                        <span>47</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="app">
                            <div id="content">
                                <div className="content-block-style collapse-post">
                                    <div
                                        className="row collapse-post-header justify-content-between"
                                    >
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                                            Sunset Sunset Sunset
                                        </div>
                                        <div className="col-lg-4 col-md-9 col-sm-8 col-8">
                                            <div className="row justify-content-end">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-2">
                                                    <img src={time} alt=''/>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-4 col-7">
                                                    53 minutes ago
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                                    <a
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        onClick={() => dropNavigationClick(2)}
                                                        className="arrow-down"
                                                        id='collapse-img2'
                                                    >
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-post-content" id='collapse-post-content2'>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Modi ipsum inventore error exercitationem est,
                                            deleniti accusamus nesciunt odio labore cum id, sit ad
                                            dolore explicabo quisquam, sapiente ullam? Asperiores,
                                            molestiae. Sint, porro sunt sapiente ea non et quasi
                                            tempora distinctio ad cum, magnam labore nam harum
                                            facilis praesentium ratione minima quos explicabo,
                                            deserunt nihil unde ab laudantium. Assumenda, ullam
                                            distinctio? Expedita saepe necessitatibus est quidem
                                            nisi ex iure beatae, eaque animi, ut distinctio dicta
                                            nam unde itaque possimus sed blanditiis perspiciatis
                                            atque fugit voluptas optio aperiam? Nisi harum corrupti
                                            sequi?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 content-right-sectoring">
                        <div
                            className="row content-block-style text-center justify-content-center"
                            id="avatar"
                        >
                            <div>
                                <img className="img-fluid" src={avatar} alt=''/>
                            </div>
                            <div>
                                <p>Hanna Dorman</p>
                                <p className="text-secondary"><small>UX/UI designer</small></p>
                            </div>
                            <div className='avatarLogos'>
                                <img src={telegram} alt=''/>
                                <img src={hh} alt=''/>
                                <img src={twitter} alt=''/>
                            </div>
                        </div>
                        <div
                            className="row content-block-style content-right-block-sectoring"
                        >
                            <button
                                className="d-flex justify-content-between dropNavigation-header"
                            >
                                <span>Navigation</span>
                                <a
                                    className="arrow-down"
                                    onClick={() => dropNavigationClick(3)}
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    id='collapse-img3'
                                >
                                </a>
                            </button>
                            <ul className="navbar-collapse collapse dropNavigation" id='collapse-post-content3'>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <img src={myProfile} alt=''/>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <div
                                            className="justify-content-between align-items-start d-flex"
                                        >
                                            <div className="d-flex">
                                                <img src={balance} alt=''/>
                                                <span>Balance</span>
                                            </div>
                                            <span className="fw-lighter">$ 1,430</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <div
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="d-flex">
                                                <div className="d-flex">
                                                    <img src={connections} alt=''/>
                                                </div>
                                                <span>Connections</span>
                                            </div>
                                            <span className="badge bg-danger rounded-pill fw-lighter"
                                            >29</span
                                            >
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <img src={friends} alt=''/>
                                        <span>Friends</span>
                                    </a>
                                </li>
                                <li></li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <div
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="d-flex">
                                                <img src={events} alt=''/>
                                                <span>Events</span>
                                            </div>
                                            <span className="badge bg-success rounded-pill fw-lighter"
                                            >45</span
                                            >
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <img src={settings} alt=''/>
                                        <span>Account settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="row content-block-style content-right-block-sectoring"
                        >
                            <button
                                className="d-flex justify-content-between dropNavigation-header"
                            >
                                <span>Share your thoughts</span>

                                <a
                                    className="arrow-down"
                                    onClick={() => dropNavigationClick(4)}
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    id='collapse-img4'
                                >
                                </a>
                            </button>
                            <div className="dropForm collapse" id='collapse-post-content4'>
                                <div>
                    <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <a>
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
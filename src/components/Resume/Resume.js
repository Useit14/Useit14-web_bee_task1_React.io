import React, {useState} from 'react';
import Protorype from './Protorype.jpg'
import settings from './settings.png'
import avatar from './avatar.jpg'
import balance from './balance.png'
import telegram from './telegram.png'
import Mockup from './Mockup.jpg'
import friends from './friends.png'
import vk from './vk.svg'
import email from './email.svg'
import Wireframe from './Wireframe.jpg'
import twitter from './twitter.png'
import connections from './connections.png'
import events from './events.png'
import hh from './hh.png'
import myProfile from './myProfile.png'
import phone from './phone.png'

function Resume() {

    const [show1, setShow1] = useState('show')
    const [show2, setShow2] = useState(' ')
    const [show3, setShow3] = useState(' ')
    const [show4, setShow4] = useState(' ')
    const [show5, setShow5] = useState(' ')
    const [show6, setShow6] = useState(' ')
    const [show7, setShow7] = useState(' ')
    const [show8, setShow8] = useState(' ')
    const [arrow1, setArrow1] = useState('arrow-up')
    const [arrow2, setArrow2] = useState('arrow-down')
    const [arrow3, setArrow3] = useState('arrow-down')
    const [arrow4, setArrow4] = useState('arrow-down')
    const [arrow5, setArrow5] = useState('arrow-down')
    const [arrow6, setArrow6] = useState('arrow-down')
    const [arrow7, setArrow7] = useState('arrow-down')
    const [arrow8, setArrow8] = useState('arrow-down')


    const dropNavigationClick = (arrow, show, setShow, setArrow) => {
        if (arrow == 'arrow-up') {
            setArrow('arrow-down')
        } else {
            setArrow('arrow-up')
        }
        if (show == 'show') {
            setShow(' ')
        } else {
            setShow('show')
        }
    };


    return (
        <div id="content">
            <div className="content-sectoring">
                <div className="row justify-content-between">
                    <div className="col-lg-9">
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-1 col-md-3 col-sm-4 col-4">
                                    Introduction
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow1, show1, setShow1, setArrow1)}
                                            className={arrow1}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`collapse-post-content collapse ${show1}`}
                            >
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Modi ipsum inventore error exercitationem est, deleniti
                                    accusamus nesciunt odio labore cum id, sit ad dolore
                                    explicabo quisquam, sapiente ullam? Asperiores, molestiae.
                                    Sint, porro sunt sapiente ea non et quasi tempora distinctio
                                    ad cum, magnam labore nam harum facilis praesentium ratione
                                    minima quos explicabo, deserunt nihil unde ab laudantium.
                                    Assumenda, ullam distinctio? Expedita saepe necessitatibus
                                    est quidem nisi ex iure beatae, eaque animi, ut distinctio
                                    dicta nam unde itaque possimus sed blanditiis perspiciatis
                                    atque fugit voluptas optio aperiam? Nisi harum corrupti
                                    sequi?
                                </div>
                            </div>
                        </div>
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-6 col-md-6 col-sm-9 col-11">
                                    1. Prototyping, wireframing, user flows, mockups
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow2, show2, setShow2, setArrow2)}
                                            className={arrow2}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`row collapse-post-content collapse justify-content-between ${show2}`}
                            >
                                <div className="col-lg-4 card bg-dark">
                                    <img src={Wireframe} alt=''/>
                                    <div className="card-body bg-white">
                                        <h5>Wireframe</h5>
                                        <p>
                                            A web page layout stripped of visual design used to
                                            prioritize page elements based on user needs
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 card bg-dark">
                                    <img src={Protorype} alt=''/>
                                    <div className="card-body bg-white">
                                        <h5>Prototype</h5>
                                        <p>
                                            A sample or simulation of a final product used to test
                                            and gather feedback. Low-fidelity prototypes might be
                                            sketched on paper and don’t allow user interaction.
                                            High-fidelity prototypes are typically computer-based
                                            and allow for mouse and keyboard interaction.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 card bg-dark">
                                    <img src={Mockup} alt=''/>
                                    <div className="card-body bg-white">
                                        <h5>Mockup</h5>
                                        <p>
                                            A realistic visual model of what a final webpage or
                                            application will look like
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-5 col-md-5 col-sm-7 col-11">
                                    2. Visual design and design software
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow3, show3, setShow3, setArrow3)}
                                            className={arrow3}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`collapse collapse-post-content ${show3}`}
                            >
                                <div>
                                    Both UX designers and UI designers use visual design
                                    software, like Figma, Sketch, Photoshop, and Illustrator, to
                                    create the visual elements of a product. Besides proficiency
                                    in the tools, you should build your knowledge of visual
                                    design best practices for things like typography, color
                                    theory, layout, icons, and general design theory.
                                </div>
                            </div>
                        </div>
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-5 col-md-5 col-sm-7 col-11">
                                    3. User research and usability testing
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow4, show4, setShow4, setArrow4)}
                                            className={arrow4}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`collapse collapse-post-content ${show4}`}
                            >
                                <div>
                                    To design a product that solves a user problem, meets a user
                                    need, or generally delights a user, you first need to
                                    understand who that user is. That’s where user research
                                    comes into play. Conducting the right type of user research
                                    for the product or feature you’re designing can empower you
                                    to make a product even better. As you develop prototypes,
                                    you’ll conduct user testing to validate your design choices.
                                    Knowing how to iterate through these two user-centric phases
                                    can help make you a more effective designer. This skill is
                                    so critical that some companies have a specialized role on
                                    their UX team known as the UX researcher.
                                </div>
                            </div>
                        </div>
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-4 col-md-4 col-sm-5 col-5">4. Agile</div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow5, show5, setShow5, setArrow5)}
                                            className={arrow5}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`collapse collapse-post-content ${show5}`}
                            >
                                <div>
                                    Agile, a set of project management practices popular in the
                                    software development world, is based on an iterative
                                    approach to building a product. Since many software
                                    development teams use the agile methodology, it would make
                                    sense that UX designers could benefit from an understanding
                                    of this popular product management approach as well. UX and
                                    agile have begun to overlap to the point that there’s a term
                                    for it—agile UX design. While you don’t need to know every
                                    detail of project management to be a UX designer, you can
                                    enhance your resume by knowing the basics. Read more in our
                                    beginner’s guide to agile development.
                                </div>
                            </div>
                        </div>
                        <div className="content-block-style collapse-post">
                            <div className="row collapse-post-header justify-content-between">
                                <div className="col-lg-4 col-md-4 col-sm-5 col-11">
                                    5. Information architecture
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                    <div>
                                        <a
                                            role="button"
                                            data-bs-toggle="collapse"
                                            onClick={() => dropNavigationClick(arrow6, show6, setShow6, setArrow6)}
                                            className={arrow6}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`collapse collapse-post-content ${show6}`}
                            >
                                <div>
                                    Information architecture (IA) involves effectively
                                    organizing and structuring content. When designed well, IA
                                    helps users find the information they’re looking for or
                                    complete their task. UX designers can facilitate this by
                                    making it easy for users to understand where they are, where
                                    they need to go, and what’s next. If you’re new to
                                    information architecture, start out by studying some common
                                    website IA patterns. Much like you did with wireframing, you
                                    can also practice by creating a sitemap of a website or app
                                    you enjoy. Do this a few times, and try to identify the
                                    elements that lead to good IA.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 content-right-sectoring">
                        <div
                            className="row avatar content-block-style text-center content-right-block-sectoring justify-content-center"
                        >
                            <div>
                                <img className="img-fluid" src={avatar} alt=''/>
                            </div>
                            <div>
                                <p>Hanna Dorman</p>
                                <p className="text-secondary"><small>UX/UI designer</small></p>
                            </div>
                            <div className='avatar-logos'>
                                <img src={telegram} alt=''/>
                                <img src={hh} alt=''/>
                                <img src={twitter} alt=''/>
                            </div>
                        </div>
                        <div
                            className="row content-block-style content-right-block-sectoring"
                        >
                            <button
                                className="d-flex justify-content-between drop-navigation-header"
                            >
                                <span>Navigation</span>
                                <a
                                    className={arrow7}
                                    onClick={() => dropNavigationClick(arrow7, show7, setShow7, setArrow7)}
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                >
                                </a>
                            </button>
                            <ul className={`navbar-collapse collapse drop-navigation ${show7}`}>
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
                                className="d-flex justify-content-between drop-navigation-header"
                            >
                                <span>Contacts</span>

                                <a
                                    onClick={() => dropNavigationClick(arrow8, show8, setShow8, setArrow8)}
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    className={arrow8}
                                >
                                </a>
                            </button>
                            <div className={`drop-form collapse ${show8}`}>
                                <div>
                                    <img src={phone} alt=''/>
                                    <span>+7 977 588 18 24</span>
                                </div>
                                <div>
                                    <img src={email} alt="  "/>
                                    <span>hanna@mail.ru</span>
                                </div>
                                <div>
                                    <img src={vk} alt=''/>
                                    <span>vk.com/hanna_dorman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
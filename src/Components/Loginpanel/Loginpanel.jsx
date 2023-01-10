import React from "react";
import './Loginpanel.css'
import logo from './img/logo.png'
import photo1 from './img/photo1.png'
import photo2 from './img/photo2.jpg'
import photo3 from './img/photo3.png'
import { useState } from "react";

function Loginpanel() {
    const [toggle, settoggle] = useState(false);
    const [toggle1, settoggle1] = useState(false);
    const [toggle2, settoggle2] = useState(false);
    const [toggle3, settoggle3] = useState(false);
    const [toggle4, settoggle4] = useState(false);
    const [toggle5, settoggle5] = useState(false);
    const [Name, setname] = useState('');
    const [warning, setwarning] = useState(false);
    const [show, setshow] = useState(false);

    function login() {
        if (Name.length < 3) {
            setTimeout(() => {
                setwarning(!warning)
            },)

            setTimeout(() => {
                setwarning(warning)
            }, 2000);
        } else {
            setshow(show => true)
            setTimeout(() => {
                window.open('/Home')
            }, 1000);
        }
    }

    function close() {
        setshow(show => false)
        window.open('/Home')
    }

    function github() {
        window.open('https://github.com/Resulloymkk?tab=repositories');
    }

    function linkedln() {
        window.open('https://www.linkedin.com/in/resul-oymak-6150b7261/');
    }

    return (
        <div>
            <div className="loginpanel" id="loginpanel">
                <div className="up-side">
                    <div className="navbar">
                        <img src={logo} />
                        <div className="buttons">
                            <button id="language">English</button>
                            <button id="signin">Sign in</button>
                        </div>
                    </div>
                    <div className="center">
                        <h1>Unlimited movies, series and much more.</h1>
                        <h2>Watch wherever you want. Cancel anytime.</h2>
                        <h3>Are you ready to watch? Enter your username and Log in.</h3>
                        <div className="center-button">
                            <input onChange={e => setname(e.target.value)} type="text" placeholder="Username" maxLength={15} />
                            <button onClick={login}>Log in</button>
                            {
                                warning && (
                                    <center><h2>Username must be at least 3 letters.</h2></center>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="footer1">
                    <div className="footer1-2">
                        <div>
                            <h1>You can watch it on <p></p>your TV.</h1><p></p>
                            <h3>Watch on Smart TV, PlayStation, Xbox,<p></p> Chromecast, Apple TV, Blu-ray players and<p></p> more.</h3>
                        </div>

                        <div>
                            <img src={photo1} />
                        </div>
                    </div>
                </div>

                <div className="footer2">
                    <div className="footer2-1">
                        <div>
                            <img src={photo2} />
                        </div>

                        <div>
                            <h1>Download content to<p></p> watch offline.</h1><p></p>
                            <h3>Easily save your favorite content and always<p></p>have something to watch.</h3>
                        </div>
                    </div>
                </div>

                <div className="footer3">
                    <div className="footer3-1">
                        <div>
                            <h1>Watch wherever you<p></p> want.</h1>
                            <h3>Watch unlimited movies and series on your<p></p>phone, tablet, computer, TV at no extra cost.</h3>
                        </div>

                        <div>
                            <img src={photo3} />
                        </div>
                    </div>
                </div>

                <div className="footer4">
                    <center><div className="information">
                        <div>
                            <h1>Frequently Asked Questions</h1>
                            <button onClick={() => settoggle(!toggle)}>
                                <h1>What is Netflix? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle && (<div className="info">
                                <div>
                                    <h2>Netflix; is a streaming service that offers a vast archive of award-winning TV shows,
                                        movies, anime, documentaries and more on thousands of internet-connected devices.
                                        You can watch as much as you want, whenever you want, without a single ad -
                                        all for one low monthly fee. There's always something new to discover,
                                        and new TV shows and movies are added every week!
                                    </h2>
                                </div>
                            </div>)
                        }

                        <div>
                            <button onClick={() => settoggle1(!toggle1)}>
                                <h1>How much does Netflix cost? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle1 && (<div className="info">
                                <div>
                                    <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming
                                        device for a flat monthly fee. Monthly plan fees range from 15.99 $ to 19.99
                                        $. No extra costs, no contracts.
                                    </h2>
                                </div>
                            </div>)
                        }

                        <div>
                            <button onClick={() => settoggle2(!toggle2)}>
                                <h1>Where can I watch? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle2 && (<div className="info">
                                <div>
                                    <h2>Watch wherever you want, whenever you want.
                                        Sign in with your Netflix account to watch instantly at netflix.com on your computer or any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, media players, and game consoles.
                                        You can also download your favorite content with the iOS,
                                        Android or Windows 10 app. Use the downloads to watch on
                                        the go and without an internet connection. Take Netflix with
                                        you anywhere.
                                    </h2>
                                </div>
                            </div>)
                        }

                        <div>
                            <button onClick={() => settoggle3(!toggle3)}>
                                <h1>Ho do I cancel? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle3 && (<div className="info">
                                <div>
                                    <h2>Netflix is ​​flexible. There are no annoying
                                        contracts and commitments. You can easily cancel your
                                        account online in two clicks. There are no cancellation fees -
                                        start or stop your account anytime.
                                    </h2>
                                </div>
                            </div>)
                        }

                        <div>
                            <button onClick={() => settoggle4(!toggle4)}>
                                <h1>What can I watch on Netflix? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle4 && (<div className="info">
                                <div>
                                    <h2>Netflix has an extensive library of feature films, documentaries,
                                        TV shows and shows, anime, award-winning Netflix originals, and
                                        more. Watch as much as you want, whenever you want.
                                    </h2>
                                </div>
                            </div>)
                        }

                        <div>
                            <button onClick={() => settoggle5(!toggle5)}>
                                <h1>Is Netflix suitable for children? <div className="bold">+</div></h1>
                            </button>
                        </div>

                        {
                            toggle5 && (<div className="info">
                                <div>
                                    <h2>The Netflix Kids experience included with your subscription
                                        allows children to watch TV series and movies that can be watched as a family in a private area, while giving control to parents.
                                        Thanks to the PIN-protected parental controls in child profiles
                                        , you can restrict the maturity level of the content that
                                        children can watch and block certain content that you do not
                                        want them to see.
                                    </h2>
                                </div>
                            </div>)
                        }
                    </div></center>
                </div>

                <div className="last-footer">
                    <div>
                        <h4>SSS</h4>
                        <h4>Investor Relations</h4>
                        <h4>Terms of Use</h4>
                        <h4>Contact us</h4>
                        <button id="language">English</button>
                        <h3>Netflix</h3>
                    </div>

                    <div>
                        <h4>Help center</h4>
                        <h4>Job oppurtunities</h4>
                        <h4>Security</h4>
                        <h4>Speed test</h4>
                    </div>

                    <div>
                        <h4>Bill</h4>
                        <h4>Use Gift Card</h4>
                        <h4>Cookie Prefences</h4>
                        <h4>Legal Provisions</h4>
                    </div>

                    <div>
                        <h4>Media Center</h4>
                        <h4>Tracking Paths</h4>
                        <h4>Corporate Information</h4>
                        <h4>Only on Neflix</h4>
                    </div>
                </div>
            </div>

            {
                show && (
                    <div className="welcome">
                        <button id="close" onClick={close}>X</button>
                        <h1>Welcome {Name}</h1>
                        <h1>Do you want contact to me ?</h1>
                        <div className="buttons1">
                            <button id="github" onClick={github}></button>
                            <button id="linkedln" onClick={linkedln}></button>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Loginpanel;
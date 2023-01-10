import React from "react";
import './Home.css'
import logo from './img/logo.png'
import search from './img/searchicon.png'
import bell from './img/bellicon.png'
import user from './img/user.png'
import { useState } from "react";

function Home() {

    const [movie, setmovie] = useState(true);
    const [series, setseries] = useState(true);
    const [searchhide, setsearchhide] = useState(false);
    const [bellhide, setbellhide] = useState(false);
    const [userhide, setuserhide] = useState(false);
    const [color, setcolor] = useState(false);
    const [dropdownn, setdropdown] = useState(false);

    function moviebtn(event) {
        setmovie(movie => true);
        setseries(series => false);
        event.preventDefault();
    }

    function seriesbtn(event) {
        setseries(series => true);
        setmovie(movie => false);
        event.preventDefault();
    }

    function home(event) {
        setmovie(movie => true);
        setseries(series => true);
        event.preventDefault();
    }

    function logobtn(event) {
        window.location.reload()
        event.preventDefault();
    }

    function searchbtn(event) {
        setsearchhide(!searchhide)
        event.preventDefault();
    }

    function bellbtn(event) {
        setbellhide(bellhide => true)
        setuserhide(userhide => false)
        setbellhide(!bellhide);
        event.preventDefault();
    }


    function userbtn(event) {
        setuserhide(userhide => true)
        setbellhide(bellhide => false)
        setuserhide(!userhide)
        event.preventDefault();
    }

    function logout(event) {
        window.close();
        event.preventDefault();
    }

    const navbarcolor = () => {
        if (window.scrollY >= 40) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener('scroll', navbarcolor);

    function usera(e) {
        e.preventDefault();
    }

    return (
        <div>

            <div>
                <div className="panel1">
                    <div className="infopanel">
                        <h1>THE WALKING DEAD</h1>
                        <h3>The Walking Dead tells the story
                            <p></p>of the months and years
                            that follow after<p></p> a zombie apocalypse.
                        </h3>
                        <div className="buttons">
                            <button id="play">Play</button>
                            <button id="info">More Information</button>
                        </div>
                    </div>
                </div>

                <div className="panel2">
                    <div className="panel2-1">

                        {movie && (
                            <div>
                                <h2>Movies</h2>
                                <button className="panel2-2 tremors">

                                </button>

                                <button className="panel2-2 ett">

                                </button>

                                <button className="panel2-2 vfv">

                                </button>

                                <button className="panel2-2 interstellar">

                                </button>

                                <button className="panel2-2 ts">

                                </button>

                                <button className="panel2-2 rambo">

                                </button>

                                <button className="panel2-2 rocky">

                                </button>

                                <button className="panel2-2 bab">

                                </button>

                                <button className="panel2-2 jumanji">

                                </button>

                                <button className="panel2-2 nw">

                                </button>

                            </div>
                        )}

                        {
                            series && (<div>
                                <h2>Series</h2>
                                <button className="panel2-2 twd">

                                </button>

                                <button className="panel2-2 bb">

                                </button>

                                <button className="panel2-2 pb">

                                </button>

                                <button className="panel2-2 bcs">

                                </button>

                                <button className="panel2-2 vikings">

                                </button>

                                <button className="panel2-2 manifest">

                                </button>

                                <button className="panel2-2 the100">

                                </button>

                                <button className="panel2-2 thewitcher">

                                </button>

                                <button className="panel2-2 lucifer">

                                </button>

                                <button className="panel2-2 ftwd">

                                </button>

                            </div>)
                        }

                    </div>

                </div>

                {
                    bellhide && (
                        <div className="bellpanel">

                        </div>
                    )
                }

                {
                    userhide && (
                        <div className="userpanel">
                            <ul>
                                <li><a href="" onClick={usera}>Profile Managment</a></li>
                                <li><a href="" onClick={usera}>Profile Transfer</a></li>
                                <li><a href="" onClick={usera}>Account</a></li>
                                <li><a href="" onClick={logout}>Log out</a></li>
                            </ul>
                        </div>
                    )
                }

                <div className={color ? 'navbar navbarbg' : 'navbar'}>
                    <div className="left-navbar">
                        <a href=""><img src={logo} onClick={logobtn} /></a>
                        <ul>
                            <li><a href="" onClick={home}>Home</a></li>
                            <li><a href="" onClick={moviebtn}>Movies</a></li>
                            <li><a href="" onClick={seriesbtn}>Series</a></li>
                        </ul>
                    </div>

                    <div className="right-navbar">
                        {
                            searchhide && (
                                <input id="searchplace" type={'text'} placeholder='Search...' maxLength={20} />
                            )
                        }
                        <a href="" onClick={searchbtn}><img id="search" src={search} /></a>
                        <a href="" onClick={bellbtn}><img id="bell" src={bell} /></a>
                        <a href="" onClick={userbtn}><img id="user" src={user} /></a>
                    </div>
                </div>
            </div>

            {
                dropdownn && (
                    <div className="right-side">
                        <ul>
                            <li><a href="" onClick={home}>Home</a></li>
                            <li><a href="" onClick={seriesbtn}>Series</a></li>
                            <li><a href="" onClick={moviebtn}>Movie</a></li>
                            <li><a href="" onClick={home}>Account</a></li>
                            <li><a href="" onClick={logout}>Log out</a></li>
                        </ul>
                    </div>
                )
            }

            <button id="dropdownnn" onClick={() => setdropdown(!dropdownn)}>=</button>
        </div>
    )
}

export default Home;
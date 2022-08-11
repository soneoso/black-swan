import React from 'react'
import Header from '../Header/Header';
import './Home.css'
import flower from '.././Assets/flower.svg'
import another from '.././Assets/another.svg'
import arrow from '.././Assets/arrow.svg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="container1">
          <div className="txt-line" id="black">
            <p>Black</p>
          </div>
          <div className="txt-line line-bottom" id="Swan">
            <p>Swan</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="left-side-quote">
        <p >This is the official website for the Black Swan Restaurant <br /> Great food, carefully selected drinks and ... <br /> Great experiance, More food and love hospitality  </p>
      </div>
      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="digital">
            <p>Radisson</p>
          </div>
          <div className="txt-line line-bottom" id="designer">
            <p>Blue</p>
          </div>
        </div>
      </div>
      <div className="flower-svg">
        <img src={flower} alt="" />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">
            Shortly
          </h1>
          <h1 className='main-short-about'>
            About
          </h1>
          <h1 className='main-short-about'>
            Us!
          </h1>
        </div>
        <div className="sub-main-p-short-about">
          <p className="sub-main-short-about">
            BLACK SWAN RESTAURANT RADISSON BLU HOTEL.
          </p>
          <p className="sub-main-short-about">
            FOOD, DRINKS, HAPPYNESS. FOOD, DRINKS, HAPPYNESS. FOOD, DRINKS, HAPPYNESS.
          </p>
        </div>
        <div className="another-svg">
          <img src={another} alt="" />
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp;  BLACK</div>
          <div className="reel-item">&nbsp;  SWAN</div>
          <div className="reel-item">&nbsp;  BLACK</div>
          <div className="reel-item">&nbsp;  SWAN</div>
          <div className="reel-item">&nbsp;  BLACK</div>
          <div className="reel-item">&nbsp;  SWAN</div>
          <div className="reel-item">&nbsp;  BLACK</div>
          <div className="reel-item">&nbsp;  SWAN</div>
        </div>
        <div className="skill-set-boxes">
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">lorem</h1>
            <p className="skill-set-box-p">lorem</p>
            <p>___</p>
          </div>
          <div className="project-and-work">
            <h1>
              <Link className="h1-project" to="/projects">
                  Projects and works <img src={arrow} alt="" />
              </Link>
            </h1>
            <br />
            <p>Click Me!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
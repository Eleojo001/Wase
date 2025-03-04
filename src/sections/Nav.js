import React, {useState} from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Nav() {
const [active, setActive] = useState('active')

function hide(e){
  e.preventDefault()
  if(active === 'active'){
    setActive('dropItems');
  }else{
    setActive('active')
  }
}



  return (
    <div>
      <div className="navContainer">
        <div className="navLogo">
          <a href="/">
            <img src="/favicon.ico" alt="site logo" />
          </a>
        </div>
        <div className="navCategories">
          <li>
            <a href="/" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/waserock_93.9" className="navlink">
              Wase Rock FM 93.9
            </a>
          </li>
          <li>
            <a href="/wase_rocktv" className="navlink">
              Wase Rock TV
            </a>
          </li>
          <li>
            <a href="/wase_podcast" className="navlink">
              Podcast
            </a>
          </li>
          {/* <li>
            <a href="#" className="navlink">
              Contact us
            </a>
          </li> */}
        </div>
        {/* <div className="navCategories">
          <li>
            <a href="/" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navlink">
              About us
            </a>
          </li>
          <li className="service" onClick={(e) => hide(e)}>
            <div className="text">Our Services</div>
            <div className="dropd">
              <RiArrowDropDownLine size={"1.5rem"} />
            </div>
          </li>
          <div className={active}>
            <li>
              <a href="/news" className="navlink">
                News
              </a>
            </li>
            <li>
              <a href="/programes" className="navlink">
                Programes
              </a>
            </li>
          </div>
        </div> */}
        <div className="navListener">
          <button className="navlistenBtn">
            <span className="text">Listen Live</span>
            <span className="navlistIcon">
              <PiSpeakerSimpleHighFill style={{ color: "#ee2625" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav
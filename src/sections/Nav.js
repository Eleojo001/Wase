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
      <div className='navContainer'>
        <div className='navLogo'>
          <img src='/favicon.ico' alt='site logo' />
        </div>
        <div className='navCategories'>
          <li>
            <a href='/' className='navlink'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='m-navlink'>
              About us
            </a>
          </li>
          <li className='service' onClick={(e) => hide(e)}>
            <div className='text'>Our Services</div>
            <div className='dropd'>
              <RiArrowDropDownLine size={'1.5rem'} />
            </div>
          </li>
          <div className={active}>
            <li>News</li>
            <li>Programs</li>
            <li>Presenters</li>
          </div>
        </div>
        <div className='navListener'>
          <button className='navlistenBtn'>
            <span className='text'>Listen Live</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav
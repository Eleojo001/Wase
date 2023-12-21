import React from 'react'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Mobilesecone() {
  return (
    <div>
      <div className='MobileSectoneHolder'>
        <div className='mobileBanner'>
          <div className='homegovt'>
            <div className='mobilegovtholder'>
              <div className='mobilegovtImg'>
                <img src='/govt.jpeg' alt='' />
              </div>
              <div className='mobilegovtImg'>
                <img src='/blankuser.webp' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='mobileSectoneDescrp'>
          <h1 style={{ color: 'white' }}>
            About Us <br />
            <span style={{ color: '#ee2625' }}>
              Wase Rock Broadcasting Network
            </span>
          </h1>
          <p>
            Wase Rock Broadcasting Service is a diversified broadcasting
            platform with holdings in Radio, Television among other
            businesses... <a href='/about'>Read more</a>
          </p>
          <div className='mobileListenerBtn'>
            <button className='navlistenBtn'>
              <span className='text'>
                <a href='/waserock_103.9'>Listen Live</a>
              </span>
              <span className='navlistIcon'>
                <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilesecone
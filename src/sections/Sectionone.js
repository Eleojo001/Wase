import React from 'react'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Sectionone() {
  return (
    <div>
      <div className='sectionOne'>
        <div className='sectionOneDescription'>
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

          <a href='/waserock_103.9' className='listenlivebtn'>
            <button className='navlistenBtn'>
              <span className='text'>Listen Live</span>
              <span className='navlistIcon'>
                <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
              </span>
            </button>
          </a>
        </div>
        <div className='sectionOneaImg'>
          <div className='homefleximg'>
            <div className='govtimg'>
              <img src='/govt.jpeg' alt='' />
            </div>
            <div className='honorimg'>
              <img src='/honorable.jpeg' alt='' />
            </div>
          </div>
          {/* <img src='/sirinNoma.jpeg' alt='' /> */}
        </div>
      </div>
    </div>
  );
}

export default Sectionone
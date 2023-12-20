import React from 'react'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Mobilesecone() {
  return (
    <div>
      <div className='MobileSectoneHolder'>
        <div className='mobileBanner'>
          <img src='/sirinNoma.jpeg' alt='Banner' />
        </div>
        <div className='mobileSectoneDescrp'>
          <h1 style={{ color: 'white' }}>
            Elevate Your Listening{' '}
            <span style={{ color: '#ee2625' }}>Experience</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ullam, omnis et nostrum iure ipsa.
          </p>
          <div className='mobileListenerBtn'>
            <button className='navlistenBtn'>
              <span className='text'>Listen Live</span>
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
import React from 'react'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Sectionone() {
  return (
    <div>
      <div className='sectionOne'>
        <div className='sectionOneDescription'>
          <h1 style={{ color: 'white' }}>
            Elevate Your Listening{' '}
            <span style={{ color: '#ee2625' }}>Experience</span>
          </h1>
          <p>
            Tune in to our dedicated Agricultural FM Channel, where we bring you
            the latest insight, trends and innovations, in the farming and
            agricultural industry
          </p>

          <button className='navlistenBtn'>
            <span className='text'>Listen Live</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
        <div className='sectionOneaImg'>
          <img src='/sirinNoma.jpeg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Sectionone
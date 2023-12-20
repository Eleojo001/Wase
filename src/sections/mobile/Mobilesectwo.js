import React from 'react'
import { FaRadio } from 'react-icons/fa6';
import { PiTelevisionFill } from 'react-icons/pi';
import { GiNewspaper } from 'react-icons/gi';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdCoPresent } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa6';

function Mobilesectwo() {
  return (
    <div>
      <div className='MobilesectwoHolder'>
        <h1 style={{ color: '#ee2625' }}>
          What We <span style={{ color: '#2a166f' }}>Offer</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          omnis, beatae vitae sapiente alias quam vero molestias tenetur unde.
          Voluptatibus!
        </p>
        <div className='mobilesectwogrid'>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <FaRadio style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Radio
            </h3>
            2a166f
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <PiTelevisionFill style={{ color: '#2a166f' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Television
            </h3>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <GiNewspaper style={{ color: '#2a166f' }} />
            </div>
            <p>News</p>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <BsWindowSidebar style={{ color: '#2a166f' }} />
            </div>
            <p>Programs</p>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <MdCoPresent style={{ color: '#2a166f' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Podcast
            </h3>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <FaPodcast style={{ color: '#ee2625' }} />
            </div>
            <p>Podcast</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilesectwo
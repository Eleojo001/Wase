import React from 'react';
import { FaRadio } from 'react-icons/fa6';
import { PiTelevisionFill } from 'react-icons/pi';
import { GiNewspaper } from 'react-icons/gi';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdCoPresent } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa6';

function Sectionthree() {
  return (
    <div>
      <div className='sectionThreeHolder'>
        <div className='sectionthreeheader'>
          <h1 style={{ color: '#ee2625' }}>
            What We <span style={{ color: '#2a166f' }}>Offer</span>
          </h1>
          <p>
            "Our services are top notch with up-to-date insite on the latest
            happenings within and outsie the cuntry Nigeria"
          </p>
        </div>
        <div className='sectionThreeGrid'>
          <div className='card'>
            <div className='cardIcon'>
              <FaRadio style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Radio
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <PiTelevisionFill style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }} >Television</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <GiNewspaper style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }} >News</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <BsWindowSidebar style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }} >Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <MdCoPresent style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }} >Presenters</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <FaPodcast style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }} >Podcast</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionthree
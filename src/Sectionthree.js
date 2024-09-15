import React, { useContext, useEffect, useState } from 'react';
import { FaRadio } from 'react-icons/fa6';
import { PiTelevisionFill } from 'react-icons/pi';
import { GiNewspaper } from 'react-icons/gi';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdCoPresent } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa6';
import { DataContext } from './App';
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Sectionthree() {
  const category = useContext(DataContext)
  const [section, setSection] = useState([])
  const [visible, setVisible] = useState(4)

  useEffect(()=>{
    let feed = category.programmes;
    setSection(feed);
  },[])

  const showMoreItem = () => {
    setVisible((prev) => prev + 4);
  }


  return (
    <div>
      <div className='sectionThreeHolder'>
        <div className='sectionthreeheader'>
          <h1 style={{ color: '#ee2625' }}>Programmes</h1>
        </div>
        <div className='desktopprogramGrid'>
          {section.slice(0, visible).map((data) => {
            return (
              <div>
                <div className='programmesCard'>
                  <div className='pcdimg'>
                    <img src={data.image} alt='' />
                  </div>
                  <div className='pcdtitle'>{data.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='viewmorebtn'>
          <button className='navlistenBtn' onClick={showMoreItem} >
            <span className='text'>View more</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sectionthree
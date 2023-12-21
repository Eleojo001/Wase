import React, { useState, useEffect } from 'react';
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'

function MobileRadio() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Navmobile />
      <div className='mobileradiofooterholder'>
        <div className='radiomobile'>
          <div className='mobileHider'>
            <div className='mobileHiderHolder'>
              <h3 className='time'>{time.toLocaleTimeString()}</h3>
              <div className='radioEVT'>
                <h4 style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: 'red',
                      padding: '2px 3px',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      marginBottom: '5px',
                    }}
                  >
                    On Air:
                  </span>
                  <span>Music</span>
                </h4>
                <h4 style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: 'red',
                      padding: '2px 3px',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      marginBottom: '5px',
                    }}
                  >
                    Up Next:
                  </span>
                  <span> News</span>
                </h4>
              </div>
            </div>
          </div>

          <iframe
            src='https://zeno.fm/player/wase-rock-fm'
            width='100%'
            height='100%'
            frameborder='0'
            scrolling='no'
          ></iframe>
        </div>
      </div>
      <Mobilefooter />
    </div>
  );
}

export default MobileRadio
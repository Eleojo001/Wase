import React from 'react'
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'

function MobileTv() {
  return (
    <div>
      <Navmobile />
      <div className='mobiletvholder'>
        <div className='mobiletvstack'>
          <div className='mobiletvcard'>
            <a
              href='https://www.youtube.com/channel/UCHVdxwG2WGh15TQLLrsobOA'
              target='_blank'
              className='mtvlink'
            >
              <div className='mtvimg'>
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/byrALj63RRA?si=s-rP9D-d2TspJMny'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
              <div className='mtvtitle'>
                COTLA COMMITMENTS ONDO ADAMAWA CROSS RIVER STATES RESPECTIVELY
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='mobileFooter'>
        <div className='mobilefooterholdertv'>
          <div className='termMobiletv'>
            <li>
              <h5>Terms/Condition</h5>
            </li>
            <li>
              <h5>Contact</h5>
              <p>081 xxxx xxxx</p>
            </li>
          </div>
          <div className='mobileaddress'>
            <li>
              <h5>Address</h5>
              <p>Plateau, Jos</p>
            </li>
          </div>
        </div>
        <div className='Jomiah'>&copy; 2023 Created by JomiahCreations</div>
      </div>
    </div>
  );
}

export default MobileTv
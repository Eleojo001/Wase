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
            <a href='#' className='mtvlink'>
              <div className='mtvimg'>
                <img src='sirinNoma.jpeg' alt='' />
              </div>
              <div className='mtvtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, est!
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
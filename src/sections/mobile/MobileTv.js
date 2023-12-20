import React from 'react'
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'

function MobileTv() {
  return (
    <div>
      <Navmobile/>
      <div className="mobiletvholder">
        <div className="mobiletvstack">
          <div className="mobiletvcard">
            <a href="#" className='mtvlink'>
            <div className="mtvimg">
              <img src="sirinNoma.jpeg" alt="" />
            </div>
            <div className="mtvtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est!
            </div>
            </a>
          </div>
        </div>
      </div>
      <Mobilefooter/>
    </div>
  )
}

export default MobileTv
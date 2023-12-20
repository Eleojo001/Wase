import React from 'react'
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'

function MobileRadio() {
  return (
    <div>
      <Navmobile/>
      <div className="mobileradiofooterholder">
        <img src="wasefmlogo.png" alt="" />
      </div>
      <Mobilefooter/>
    </div>
  )
}

export default MobileRadio
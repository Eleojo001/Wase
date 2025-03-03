import React from 'react'
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'
import Nav from '../Nav'
import SectionFive from '../SectionFive'

function Mobilepodcast() {
  return (
    <div>
      <Nav/>
      <div className="podcastContainerMob">
      <div className="mpodHolder">
        <div className="mpodimg">
          <img src="favicon.ico" alt="" />
        </div>
        <h1>PODCAST</h1>
      </div>
      </div>
      <SectionFive/>
    </div>
  )
}

export default Mobilepodcast
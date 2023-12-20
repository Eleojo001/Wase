import React, {useState} from 'react'
import Nav from './sections/Nav';
import Sectionone from './sections/Sectionone';
import Sectiontwo from './sections/Sectiontwo';
import Sectionthree from './Sectionthree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';
import Navmobile from './sections/mobile/Navmobile';
import Mobilesecone from './sections/mobile/Mobilesecone';
import Mobilesectwo from './sections/mobile/Mobilesectwo';
import Mobilesecthree from './sections/mobile/Mobilesecthree';
import Mobilefooter from './sections/mobile/Mobilefooter';

export const DataContext = React.createContext();


function Home() {

  return (
    <div>
      <div className="desktop">
      <Nav/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <SectionFour/>
      <SectionFive/>
      </div>
      <div className="mobile">
        <Navmobile/>
        <Mobilesecone/>
        <Mobilesecthree/>
        <Mobilesectwo/>
        <Mobilefooter/>
      </div>



    </div>
  )
}

export default Home
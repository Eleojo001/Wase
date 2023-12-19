import React, {useState} from 'react'
import Nav from './sections/Nav';
import Sectionone from './sections/Sectionone';
import Sectiontwo from './sections/Sectiontwo';
import Sectionthree from './Sectionthree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';

export const DataContext = React.createContext();


function Home() {

  return (
    <div>
      <Nav/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <SectionFour/>
      <SectionFive/>



    </div>
  )
}

export default Home
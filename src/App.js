import React, { useContext,useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './sections/About';
import MobileRadio from './sections/mobile/MobileRadio';
import MobileTv from './sections/mobile/MobileTv';
import Mobilepodcast from './sections/mobile/Mobilepodcast';
import MobilenewsDetails from './sections/mobile/MobilenewsDetails';
export const DataContext = React.createContext();

function App() {
  const [news, setNews] = useState([
    {
      id: '1',
      category: 'News',
      title: 'Gov. Mutfwang signs 2024 Appropriation Bill into law',
      author: 'Agency Reporter',
      content: `His Excellency, the Executive Governor of Plateau State, Governor, Caleb Mutfwang has signed the state’s 2024 budget of N314.8 billion into law, his media aide, Mr Gyang Bere, stated on Wednesday in Jos. \n 

        Christened “Budget of New Beginnings", the 2024 budget has a recurrent expenditure component of N162.3 billion and capital expenditure of N152.5 billion. \n 

        "As governor, this Appropriation Bill encapsulates our vision to transform Plateau into a citadel of glory.\n 

        “We believe Plateau deserves better than what was previously in place.\n 

        “We encountered a state of neglect in critical sectors and we are determined to lay a new foundation for a sustainable, excellent, and value-adding future.\n He expressed optimism that the budget implementation would improve the living conditions of the people and urged citizens to support the government for continued progress.`,
      date: 'FEBRUARY 23, 2023',
      image: '/govtbill.png',
    },
    {
      id: '2',
      category: 'News',
      title: 'Police rescue abducted Plateau pastor, three others in Bauchi',
      author: 'Agency Reporter',
      content: `The Bauchi State Police Command said its operatives have rescued four people kidnapped by bandits who invaded Raddi village via Bassa Local Government Area of Plateau State on Wednesday.\n

The state Police Public Relations Officer, Ahmed Wakil, a Superintendent of Police, disclosed this in a statement made available to journalists on Wednesday.\n

Wakil said  the bandits had stormed the house of one Yakubu Makeri, of Yagi village via Rahama ward, with the intention of attacking him but a team of operatives attached to Rishi Police Divisional Headquarters in conjunction with local vigilantes swiftly moved to the scene and engaged the bandits in a gun battle.\n

He stated that the Commissioner of Police has ordered the Divisional Police Officer to intensify wider patrol across the  area in a bid to arrest the fleeing bandits so they can face the full wrath of the law.`,
      date: 'FEBRUARY 23, 2023',
      image: '/policeLogo.jpeg',
    },
    {
      id: '3',
      category: 'News',
      title:
        'Plateau Muslim community backs Gov Muftwang, dismisses rumoured marginalisation',
      author: 'Agency Reporter',
      content: `Contrary to the insinuation that the Muslims in Plateau State are not represented in the cabinet of Governor Caleb Muftwang, the leadership of the Muslim Umma in the state has condemned the insinuation and declared that the Muslims are adequately represented. \n
      
      Addressing newsmen in Jos, Plateau State, the spokesman of the Muslim Umma, Mubarak Isa, said the governor has a good relationship with the Umma, adding that this has resulted in the appointment of Muslims into various positions of authority in the six-month-old Muftwang administration. \n

      According to him, the relationship between the governor, the government, and the Muslim community is less than savory, adding that those behind the insinuation simply want to soil a good relationship. \n
      He said, “We have come before you this day all the leadership of Muslim ummah from all parts of Plateau State to pass a vote of confidence on the Executive Governor of Plateau State, Barr. Caleb Muftwang, on his six months of unprecedented achievements.
      \n

      “This governor and government have shown that the dividends of democracy can reach the common man from the first day in office. The Caleb Mutftwang-led “The Time is Now” administration has displayed the spirit of oneness, brotherhood, and development.\n

“With this background, we want to state categorically that Gov. Caleb Muftwang is a unifier. That’s the reason we want to air our view about Muftwang and tell the world about his appointments and achievements with the Muslim community in Plateau State.`,
      date: 'FEBRUARY 23, 2023',
      image: '/muslim.jpeg',
    },
  ]);
  return (
    <div className='App'>
      <BrowserRouter>
        <DataContext.Provider value={{ news }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/waserock_103.9' element={<MobileRadio />} />
            { <Route path='/wase_rocktv' element={<MobileTv />} /> }
            <Route path='/wase_podcast' element={<Mobilepodcast />} />
            <Route path='/news/:id' element={<MobilenewsDetails />} />
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;

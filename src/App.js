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
      id: '7',
      category: 'News',
      title: `THE TIC CHAIRMAN OF WASE LGC, HON. HAMISU ANANI WHO WAS ABLY REPRESENTED BY THE DIRECTOR OF SOCIAL SERVICE WASE LGA HAVE FLAGGED OFF THE DISTRIBUTION OF RELIEF MATERIALS TO A CROSS SECTION OF THOSE AFFECTED BY DISASTER WITHIN THE LOCALITY MONTHS AGO.
  `,
      author: `Musab Imamuddeen`,
      content: `The Director of social service of wase LGA on behalf of the TIC chairman of wase LGC Hon. Hamisu Anani today flagged of the distribution of relief materials worth millions donated by the Federal Government through the National Emergency Management Agency (NEMA).\n

The Chairman expressed his appreciation for the singular gesture shown to alleviate the plight of people affected by different degrees of disaster (flood, wind storm) that happened months back within the LGA. \n
In his remark, he called on the beneficiaries to make proper use of the items collected and not to sell it, as the government will frown at such.\n

Items distributed includes sewing machines, water pumps, grinding machines, mattresses, cooking utensils, blankets, pots of different sizes, seedlings, food items, mats, knapsack sprayer, liquid fertiliser, etc.\n
  `,
      date: '26th December, 2023',
      image: '/tic1.jpeg',
      images: [
        { pic: '/tic1.jpeg' },
        { pic: '/tic2.jpeg' },
        { pic: '/tic3.jpeg' },
        { pic: '/tic4.jpeg' },
      ],
    },
    {
      id: '1',
      category: 'News',
      title: `HON.HAMISU MOHAMMED ANANI TRANSITION IMPLEMENTATION COMMITTEE CHAIRMAN OF WASE LGC,ALGON CHAIRMAN OF PLATEAU STATE CHAPTER FLAGS OFF THE DISTRIBUTION OF FERTILIZER TO FARMERS IN WASE LOCAL GOVERNMENT COUNCIL
  `,
      author: `Musab Imamuddeen`,
      content: `Wase Local government council under the leadership of Hon. Hamisu Anani has commenced the distribution of 3 trucks assorted fertilizers acquired by the executive governor of plateau state His Excellency Barr. Caleb Manaseh Mutfawang for plateau farmers across the 17 local government council in the state for dry season farming. \n
  The TIC chairman informed the people of wase local government the  readiness of the executive governor of plateau state to invest more on agriculture, he said  agriculture is the backbone of the economy and is the major source of livelihood to significant portion of the population, Governor Mutfwang administration will continue to invest in the sector to ensure food security, economic growth and poverty alleviation in the state. \n
  Hon. Anani thanked NG CARES for their immense efforts in supporting plateau state agricultural development.\n
  The representative of the program manager plateau state agricultural development programme laud the efforts of the transition chairman of wase for his remarkable gesture by providing trucks of fertilizer to his local government council at subsidize rate few months ago describing it as the first of its kind ever recorded, the programme manager also urged the wase local government farmers to use the fertilizer to boost the yield of their crops and not resell them, 
  because the TIC chairman have brief them about wase local in terms of agriculture, that was local  government is blessed with fertile land, a dedicate and hard-working farmers, a home of agriculture it is also in record that thousands of trucks loaded with farm products  were dispatched across the country from wase local government every year.
  `,
      date: '26th December, 2023',
      images: [
        { pic: '/anani.jpeg' },
        { pic: '/anani1.jpeg' },
        { pic: '/anani4.jpeg' },
      ],
      image: '/anani.jpeg',
    },
    {
      id: '2',
      category: 'News',
      title:
        'TRANSITION COMMITTEE CHAIRMEN IN PLATEAU CONDEMN  ATTACKS IN PLATEAU COMMUNITIES, CALL FOR ARREST OF PERPETRATORS',
      author:
        'Hamisu Anani . Transition Committee chairman wase and plateau state ALGON Chairman',
      content: `Transition committee chairmen across the seventeen local government areas of plateau state  has condemn in strong terms the recent coordinated attacks on innocent citizens in some communities in Bokkos, Mangu, and Barkin-Ladi Local Government Areas of the state saying  these attacks were unprovoked and  have resulted in the tragic loss of several lives and  destruction of property. \n
      
      Chairman of the 17 local government areas under the auspices of association of local government ( ALGON) and Chairman of wase local government Hamisu Anani said the renewed attacks across these communities especially in the eva of Christmas is a momentental tradegy and loss to the great people of plateau state and  calls for united efforts to identify and apprehend those responsible for these heinous acts. \n

      He applauded the untiring efforts of the executive governor of plateau state barrister Caleb mannesah Mutfwang for his prompt response to action and the repeated calls on security agencies to tackle the situation headlong through the provision of logistics and the needed support in fishing out the propertrators of this devilish act. 
      \n

      We ALGON further  acknowledged President Bola Ahmed Tinubu for supporting the Nigerian Army in maintaining security through  the Chief of Army Staff, Lieutenant General Taoreed Lagbaja and the Commander Operation SAFE HAVEN for their commitment to addressing various security challenges facing Plateau and the nation.
  \n
      We express worrisome and sadness over the loss of  numerous lives due to incessant attacks in Mangu, Bokkos, and Barkin-Ladi saying this  senseless and unprovoked acts are unnecessary and unjustifiable while appealing  to the sponsors of these attacks to reconsider, as there is nothing to gain from such violence. The spirit of the Plateau people will not be broken."
 \n
      We ALGON expressed sympathy for the affected families and communities and urged citizens to stand strong, assuring them that the government is actively working to address the situation while calling for calm in the affected areas.
    \n

“With this background, we want to state categorically that Gov. Caleb Muftwang is a unifier. That’s the reason we want to air our view about Muftwang and tell the world about his appointments and achievements with the Muslim community in Plateau State.`,
      date: '26th December, 2023',
      image: '/himisu.jpeg',
    },
    {
      id: '3',
      category: 'News',
      title:
        'FREE CHRISTMAS TRIP TO ALL LGA HQs COMMENCES TOMMORROW BY GOVERNOR CALEB MANASEH MUTFAWANG',
      author: 'Agency Reporter',
      content: `The executive governor of plateau state His Excellency Barr.  Caleb manaseh Mutfawang has approved free ride from Jos metropolis to all local government headquarters in the state. \n
The pickup station is plateau polytechnic  Jos to the various local government Hqs, passengers ready to travel out of their local government to Jos city are advise to wait for the first turn of the bus in their various local government to have a free ride. \n
The free ride will commence on Saturday 23/12/2023 and end on  Wednesday 26/12/2023
`,
      date: 'DECEMBER 26, 2023',
      image: '/freetp.webp',
    },
    {
      id: '4',
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
    {
      id: '5',
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
      id: '6',
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
  ]);

  const [programmes, setProgrammes] = useState([
    {
      id: '1',
      category: 'programmes',
      title: 'Sirin Noma',
      content: ``,
      date: '26th December, 2023',
      image: '/sirinNoma.jpeg',
    },
    {
      id: '2',
      category: 'programmes',
      title: 'Ilimin Kasuwanci',
      content: ``,
      date: '26th December, 2023',
      image: '/llimin.jpeg',
    },
    {
      id: '3',
      category: 'programmes',
      title: 'Dogaro da Kai',
      content: ``,
      date: '26th December, 2023',
      image: '/dogarodakai.jpeg',
    },
    {
      id: '4',
      category: 'programmes',
      title: 'Kasuwar Wase',
      content: ``,
      date: '26th December, 2023',
      image: '/kasuwarwuse.jpeg',
    },
    {
      id: '5',
      category: 'programmes',
      title: 'Siyasa ba Gaba ba',
      content: ``,
      date: '26th December, 2023',
      image: '/siyasa.jpeg',
    },
    {
      id: '6',
      category: 'programmes',
      title: 'Kacici Kacici',
      content: ``,
      date: '26th December, 2023',
      image: '/kacici.jpeg',
    },
  ]);

  return (
    <div className='App'>
      <BrowserRouter>
        <DataContext.Provider value={{ news, programmes }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/waserock_103.9' element={<MobileRadio />} />
            {<Route path='/wase_rocktv' element={<MobileTv />} />}
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

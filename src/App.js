import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import "./adminPages/Addmin.css";
import Home from "./Home";
import About from "./sections/About";
import MobileRadio from "./sections/mobile/MobileRadio";
import MobileTv from "./sections/mobile/MobileTv";
import Mobilepodcast from "./sections/mobile/Mobilepodcast";
import MobilenewsDetails from "./sections/mobile/MobilenewsDetails";
import News from "./sections/News";
import Programes from "./sections/Programes";
import Adminhome from "./adminPages/Adminhome";
import "bootstrap/dist/css/bootstrap.min.css";

export const DataContext = React.createContext();

function App() {
  const [news, setNews] = useState([
    {
      id: "27",
      category: "News",
      title: `SOLIDARITY
THADDEUS`,
      author: ``,
      content: `The Plateau state Council of Chiefs and Emirs has sent strong warning against any force that will negate the dignity and respect of the institution.

Chairman of the state Council of Chiefs and Emirs, and the Gbong Gwom Jos, Da Gyang Buba, gave the warning when he led members of the Council on a solidarity visit on the Emir of Wase, Mahammadu Sambo, over a recent assault on him by one of his council members.

Our Langtang zonal correspondent has details...`,
      date: "10th January, 2025",
      images: [{ pic: "/chiefEmir.jpeg" }],
    },

    {
      id: "26",
      category: "News",
      title: `ALGON condemns suspension of Edo LG chairmen, councillors`,
      author: ``,
      content: `The Association of Local Governments of Nigeria (ALGON) on Thursday condemned in strong terms the suspension of 18 local government chairmen and councillors in Edo state by the House of Assembly.

Governor Monday Okpebholo had accused the suspended chairmen of disobeying his instructions by allegedly refusing to submit their financial records to the state government.

However, the ALGON’s National Executive Council (NEC) and its Board of Trustees (BoT) on Thursday jointly condemned the decision saying the governor and lawmakers did not give the council chairmen fair hearing to defend themselves.

The association at an emergency meeting in Katsina state, appealed to President Bola Tinubu to intervene, emphasising the need to respect the autonomy and independence of local governments as guaranteed by the nation’s constitution and recent ruling by the Supreme Court.

“ALGON views this suspension as a setback for democracy and abuse of power, particularly since the chairmen were not given a chance to defend themselves.

“This suspension is invalid. It contradicts the Supreme Court’s judgment granting local governments autonomy,” the ALGON National Publicity Secretary, and Executive Chairman, Wase Local Government Area, Hon. Hamisu Anani, in a statement said.

Anani stated that if the Edo State House of Assembly’s decision was right, it would not have generated criticisms across the length and breadth of the country.

“This suspension is unconstitutional; it is null and void.

“ALGON is hereby urging the Edo State House of Assembly to reverse the decision and respect the rule of law to strengthen democratic governance.

“ALGON also appeals to President Bola Tinubu to intervene and halt this abuse of power,” the statement said.`,
      date: "23rd December, 2024",
      images: [{ pic: "/along.jpg" }],
    },

    {
      id: "25",
      category: "News",
      title: `WE ARE HIRING!`,
      author: ``,
      content: ` 

We are hiring at Wase Rock FM, Wase Plateau State. 

Wase Rock FM is a radio station owned by Wase Local Government Area of Plateau State and currently on full broadcast transmission.

If you are young and talented, you can apply for the following   positions 

1. Station Manager
2. On Air Personalities 
3. Newscasters and Reporters
4. Studio and Transmission Engineers


MODE OF APPLICATION

Qualified candidates should send their applications to jenniferkaze@gmail.com 

OR

The Office of the Director, Social Services,
Wase Local Government Secretariat.Wase.

DURATION

Two weeks from the date of commencement of this announcement November, 2024.

Shortlisted candidates for interview will be contacted via the addresses on their applications.


 Qualification and Detailed job descriptions for Wase Rock FM positions: 

Station Manager

1. Job Title: Station Manager
2. Reports to: Executive Chairman, Wase Local Government Council
3. Location: Wase, Plateau State
4. Job Type: Full-time

Responsibilities

1. Oversees station operations, strategy, and growth.
2. Manages staff, including recruitment, training, and performance evaluation.
3. Develops and implements programming schedules and content.
4. Ensures compliance with broadcasting regulations and standards.
5. Maintains relationships with stakeholders, advertisers, and partners.
6. Manages budget and resources.
7. Enhances station branding and community engagement.

Requirements

1. Degree in Mass Communication, Business Administration or related field.
2. 5+ years of experience in radio management or related industry.
3. Strong leadership, communication and organizational skills.
4. Familiarity with Nigerian broadcasting regulations.

On-Air Personalities

1. Job Title: On-Air Personality (OAP)
2. Reports to: Program Director
3. Location: Wase, Plateau State
4. Job Type: Full-time

Responsibilities

1. Hosts radio shows, programs and events.
2. Develops engaging content, scripts and interviews.
3. Interacts with listeners through social media and phone calls.
4. Participates in promotional activities and events.
5. Collaborates with production team for show preparation.
6. Stays updated on current events, news and trends.

Requirements

1. Degree in Mass Communication, Performing Arts or related field.
2. 2+ years of experience in radio presenting or related industry.
3. Excellent communication, presentation and interpersonal skills.
4. Strong voice, tone and on-air presence.

Newscasters and Reporters

1. Job Title: Newscaster/Reporter
2. Reports to: News Director
3. Location: Wase, Plateau State
4. Job Type: Full-time

Responsibilities

1. Researches, writes and presents news stories.
2. Conducts interviews with newsmakers and experts.
3. Covers local events, meetings and press conferences.
4. Edits and produces news segments.
5. Maintains relationships with news sources and stakeholders.
6. Provides live reports from the field.

Requirements

1. Degree in Mass Communication, Journalism or related field.
2. 2+ years of experience in news reporting or related industry.
3. Strong research, writing and presentation skills.
4. Ability to work under tight deadlines.

Studio and Transmission Engineers

1. Job Title: Studio and Transmission Engineer
2. Reports to: Technical Director
3. Location: Wase, Plateau State
4. Job Type: Full-time

Responsibilities

1. Maintains and operates studio and transmission equipment.
2. Ensures smooth broadcast signal transmission.
3. Troubleshoots technical issues.
4. Installs and configures new equipment.
5. Monitors broadcast quality and performance.
6. Collaborates with production team for live broadcasts.

Requirements

1. Degree in Electrical/Electronic Engineering or related field.
2. 2+ years of experience in broadcast engineering or related industry.
3. Strong technical knowledge of studio and transmission systems.
4. Problem-solving and analytical skills.

Application Instructions

1. Send applications to: jenniferkaze@gmail.com
OR
2. Submit hard copies to: The Office of the Director, Social Services, Wase Local Government Secretariat, Wase.
3. Include CV, cover letter and relevant certificates.
4. Application deadline: Two weeks from 3rd December, 2024.

SIGNED.
Jennifer I.Kaze
Director, Social Services

For
Executive Chairman
Wase Local Government Council.`,
      date: "3rd December, 2024",
      images: [{ pic: "/hire.png" }],
    },
    {
      id: "24",
      category: "News",
      title: `Governor Mutfwang's lobby for the dualization of Akwanga-Jos-Bauchi-Gombe Road is yielding positive results`,
      author: `Joshua Felix`,
      content: `Being a regular user of the road before and after he became Governor and following the legitimate concerns of Nigerians particularly those who pass through Jos to the North East of Nigeria, Governor Caleb Mutfwang took it upon himself to mobilise relevant stakeholders to persuade President Bola Ahmed Tinubu to prioritise the construction and dualization of the aforementioned road.

It is gratifying to note that after visits by Governor Mutfwang to the Honourable Minister of Works, the ever hard working and competent Engr. David Umahi, the Minister persuaded Mr. President to listen to the cries of Nigerians who pass through the Abuja- Jos- North East corridor.  

This efforts culminated into the presentation of a well articulated memo to the National Council of States meeting, where approval was given for the inclusion of this road among the President's legacy road projects! 

To match words with action, Mr. President proceeded to negotiate and secure a Chinese EXIM Bank facility of about $1.1 billion ! Infact things are moving so fast that Messrs CGC have been appointed contractors for the project.  

At the moment, designs are being finalised with the active inputs from the Plateau State Government. It is hoped that the procurement process will follow soon so that by 2025 actual construction will begin. 

In the interim, Governor Mutfwang has engaged the Federal Road Maintenance Agency (FERMA) to explore collaboration for remedial intervention pending the commencement of the dualization of the road by the Federal Ministry of Works. 

As the Mutfwang administration turns full throttle and looks good towards the future, there is no doubt that the people's Governor's politico-economic and social mantra will continue to deploy subtle diplomacy and prolific political soldiering, using lobbying and forward-looking politics or politics without bitterness, to bring home more dividends of democracy.`,
      date: "20th November, 2024",
      images: [{ pic: "/pic2_11_2024.jpg" }],
    },
    {
      id: "23",
      category: "News",
      title: `CONDOLENCE VISITS BY THE EXECUTIVE CHAIRMAN WASE LOCAL GOVERNMENT COUNCIL HON. ALH. HAMISU  ANANI ,  CONDOLE WITH THE   FAMILY OF JEFFREY ISAAC.`,
      author: ``,
      content: `

We received with great shock the devastating and shocking news of the passing away of Consultant WASE/Rock FM Radio Jeffrey Isaac whose sad event occurred on Saturday 9th November 2024. 

This is a colossal loss to the family ,  Wase Local government Council and indeed the Local Government entirely.

The deceased who was a worthy friend to me and spent all his life on earth modelling and was dedicated and commited  to serving God and humanity. 

Death is indeed inevitable, but anytime it occurs, it appears to be new to us. We love him but God loves him most. We have no right whatsoever to question His action. We remain appreciative to God almighty for all that befall us.

This is truly a trying moment for us all .

Late Jeffrey Isaac left to the great beyond at the very moment his wise counsel as a worthy friend and leader is needed Most. 
But as believers,  we must accept and endure in good faith. He is gone but he will forever remain green in our memories.
His good counsel will be missed greatly.

May God almighty forgive his past wrong deeds and grant him the highest perfect condition .

It's our prayer that God almighty Will give Wase Rock FM and  his immediately family and other bereaved the fortitude to bear this huge loss.

Do Please accept our heart felt sympathy and condolences.

 Signed 

From the office of the Hon Chairman Wase Local government council.`,
      date: "12th November, 2024",
      images: [{ pic: "/pic_govt_11_2024.jpg" }],
    },
    {
      id: "22",
      category: "News",
      title: `A Hero Passes On!`,
      author: ``,
      content: ` It is with profound sadness that we announce the passing of Jeffrey Isaacs, our esteemed management consultant and cherished member of the Wase Rock FM family.

Jeffrey's invaluable expertise and guidance significantly contributed to our station's success. His warmth, kindness, and generosity inspired countless colleagues, friends, and all those whose lives he touched.

We extend our deepest condolences to Jeffrey's family, loved ones, and the entire community.

May his memory be a blessing, and may he rest in eternal peace.

Rest in Peace, Jeffrey Isaacs.

Signed:
The Honourable Chairman,
Wase Local Government Council,
Plateau State.`,
      date: "10th November, 2024",
      images: [{ pic: "/lostlegend.jpg" }],
    },
    {
      id: "21",
      category: "News",
      title: `CONGRATULATIONS ON YOUR RE-ELECTION AS PLATEAU STATE ALGON CHAIRMAN & NATIONAL ALGON PUBLICITY SECRETARY HON. HAMISU ANANI!!`,
      author: `Junaidu Adamu`,
      content: ` I Wish to congratulate you on your re-election as National Algon Publicity Secretary and Plateau State ALGON Chairman which is the first in the history of Plateau South for one to be allowed to serve for 2nd term under the named capacity.

Sir, your re-election as Algon Chairman did not come to us as surprise as you deserve to be honored with such a second term due to your demonstration of credibility, outstanding performance and the spirit of transparency, probity and fairness you exhibited to your colleagues. 
As you took the oath of office yesterday,  may God in His bounties of blessings, protection, and guidance, continue to see you throughout your leadership and deliberations.

Accept our warmest and heartiest congratulations once again Sir.

Junaidu Adamu,
For Media Team, Wase LGC`,
      date: "10th October, 2024",
      images: [{ pic: "/honor.jpg" }],
    },

    {
      id: "20",
      category: "News",
      title: `PLATEAU STATE LG CHAIRMEN PLEDGE COMMITMENT TO   GOVERNOR'S VISION`,
      author: `Jeffrey Isaacs, the Consultant, Wase Rock Broadcasting Network`,
      content: `The Plateau State Independent Electoral Commission (PLASIEC) has declared through the commission's Chairman Hon. Plangji Cishak, Hamisu Anani' Mohammad of the People's Democratic Party (PDP), the winner of the Wase Local Government chairmanship election, held on October 9, 2024.

Anani polled 42,819 votes, defeating his closest rival, Engineer Hamza Haruna of the All Progressive Congress (APC), who secured 29,158 votes. The Labour Party's Kabiru garnered a single vote.

In a swift response at the inauguration, Hon. Hamisu Anani, on behalf of the 17 newly elected local government chairmen, assured Governor Caleb Mutfwang and the people of Plateau State of their commitment to working in line with the executive governor's vision.

While granting an interview with Wase Rock FM news correspondent Delson Musa Sunday, Anani reassured the citizens of Wase LGA of his total commitment to a people-oriented government, in line with his earlier manifesto promises, dedicating his victory to all people of Wase..

The chairmen's commitment aligns with Governor Mutfwang's inaugural speech, where he emphasized the need for unity, peace, and development in Plateau State. The governor had outlined his administration's priorities, including:

- Peace and Security: Enhancing security measures to protect lives and property
- Economic Development: Promoting commerce, industry, and entrepreneurship
- Agriculture: Supporting farmers and improving food security
- Tourism: Developing tourist attractions and infrastructure
- Social Development: Empowering youths, women, and vulnerable groups

As the newly elected chairmen begin their tenure, the people of Plateau State eagerly anticipate the positive impact of their collecive efforts.

As written by          Jeffrey Isaacs, the Consultant, Wase Rock Broadcasting Network
`,
      date: "10th October, 2024",
      images: [{ pic: "/victory.jpg" }],
    },
    {
      id: "19",
      category: "News",
      title: `Chairmanship Candidate for WASE LGA receives donations for Campaigns from Elder Statesman`,
      author: `THADDEUS `,
      content: `Chairmansip Candidate, Wase LGA of Plateau State, Hon. Hamisu Amani Receives Donations For Campaigns from Elderstatesman and Retired Permanent Secretary, from Wase 
Sani Yahaya Mavo.

The move towards ensuring victory for the Peoples Democratic party Chairmanship Candidate for WASE local government area has received a boost.

This follows the donation of campaign materials to the flag bearer of the party by a retired permanent Secretary from WASE Sani Yahaya Mavo.

Our Langtang Zonal Correspondent has details.`,
      date: "4th October, 2024",
      images: [{ pic: "/campaign5TH.jpg" }],
    },

    {
      id: "18",
      category: "News",
      title: `PLATEAU STATE PDP FLAGS OFF CAMPAIGN RALLY`,
      author: ``,
      content: `The Peoples Democratic Party (PDP) in Plateau State flagged off its campaign rally ahead of the forthcoming Local Government Councils elections.


The event, which drew thousands of party faithfuls, supporters, and stakeholders from across the state, also witnessed massive defections from the opposition party APC into the PDP


The rally was attended by His Excellency, Governor Caleb Mutfwang, the Executive Governor of Plateau state and top PDP officials. 


The party assured the mammoth crowd that the PDP would deliver victory in the upcoming polls, emphasizing the party's commitment to the welfare and betterment of Plateau people.


The rally featured cultural performances, music, and speeches from various party leaders, energizing the crowd and setting the tone for the campaign season.`,
      date: "28th September, 2024",
      images: [{ pic: "/pdp_capmpaign.jfif" }],
    },
    {
      id: "17",
      category: "News",
      title: `Plateau State Governor Convenes Crucial Meeting with PDP Stakeholders`,
      author: ``,
      content: ` 
      In preparation for upcoming Local Government elections in the state, the Governor of Plateau State, His Excellency, 
      Gov. Caleb Mutfwang has summoned an interactive and reconciliatory meeting with 
      key stakeholders of the Peoples Democratic Party (PDP) in Plateau State.

While addressing stakeholders at the meeting, Governor Mutfwang said the call is to foster unity and reconciliation, discuss election strategies, and ensure a united front for the upcoming elections.`,
      date: "15th September, 2024",
      images: [{ pic: "/govt17.jpg" }],
    },
    {
      id: "16",
      category: "News",
      title: `TIC Chairman, Hon. Hamisu Anani Mohammed Expresses Gratitude to Stakeholders for Success of WASE ROCK Broadcasting Network's Success
 `,
      author: ``,
      content: `The Chairman, Transition Implementation Committee, Wase Local Government Council,
       Hon. Alh. Hamisu Anani Mohammed, has expressed his heartfelt appreciation for the invaluable
        contributions and motivation provided by the Commissioner for Local Government and Chieftaincy
         Affairs in Plateau State, Chief Ephraim Usman. In a press release issued to the WASE ROCK FM News Desk,
          Hon. Hamisu Anani acknowledged Chief Ephraim's instrumental role in the successful establishment of the
           WASE ROCK Broadcasting Network.
Additionally, Hon. Hamisu Anani extended his gratitude to Hon. Yakubu Jang, a renowned stakeholder in Plateau State and a steadfast supporter of the WASE ROCK Broadcasting Network project, for his goodwill and unwavering commitment to the initiative."`,
      date: "15th August, 2024",
      images: [{ pic: "/aug15img2.jpg" }, { pic: "/aug15img.jpg" }],
    },
    {
      id: "15",
      category: "News",
      title: `WASE Rock FM 93.9 Gets Green Light for Commercial Broadcasting!`,
      author: `Managemnt`,
      content: `

Breaking News \n

In a landmark development, the National Broadcasting Commission (NBC) has granted WASE Rock FM 93.9 approval for commercial broadcasting!\n

According to an official letter signed by NBC Secretary, Mrs. Francisca Aiyantan, WASE Rock FM has successfully completed its test transmission period.\n

The commission urges the station to adhere to the National Broadcasting Commission Act, Cap. N11, and the Nigeria Broadcasting Code.\n
In a similar development,
The Wase LGA TIC Chairman Commends NBC, assures compliance.\n

The Transition Implementation Committee Chairman, Hon. Alhaji Hamisu Anani Mohammed, has praised the National Broadcasting Commission (NBC) for the approval.\n
In a statement
Through his Director of Personnel Management, Alhaji Abdullahi, the TIC Chairman assured the National Broadcasting Commission, NBC of Wase Rock FM's "100% compliance" with regulations.\n

Hon. Alhaji Hamisu Anani congratulated the people of Wase Local Government, Southern Plateau, and Plateau State at large on this significant achievement.\n

"This milestone marks a new era for Wase LGA, and we're committed to upholding NBC's standards." - Hon. Alhaji Hamisu Anani Mohammed.\n

WASE Rock FM 93.9 remains dedicated to serving the community with quality programming and adherence to broadcasting excellence.`,
      date: "6th Aug, 2024",
      image: "/nbcwase12.jpg ",
      images: [{ pic: "/nbcwase13.jpg" }],
    },
    {
      id: "14",
      category: "News",
      title: `Tripartite Union of Nigerian Workers in Wase LGA, Purchase Nomination Form for Incumbent Council Chairman,
       Hon. Hamisu Anani.`,
      author: `Managemnt`,
      content: `
      This they said, is in a bid to consolidate on good governance Wase Local Government Area enjoys under his able leadership. \n
      Hence, the need for such sacrificial contributions by Nigerian workers in Wase and the 
      call for continuity of good leadership by Honourable Hamisu Anani`,
      date: "1st Aug, 2024.",
      image: "/announcement_image.jpg",
      images: [{ pic: "/breakingNews.jpeg" }],
    },
    {
      id: "13",
      category: "News",
      title: `Special Announcement 📢`,
      author: `Managemnt`,
      content: `It's now time, to tune in to the hottest new radio station in town - Wase Rock FM! \n
      We're excited to announce that Wase Rock FM is now in test transmission mode, bringing you the best of information, education and entertainment 24/7!\n
      Tune in now to 93.9FM and enjoy the ride!\n
      Note: Our test transmission is a sneak peek of what's to come. Your feedback is valuable to us, so let us know what you think!\n
      Stay tuned for our official launch date and get ready to rock with Wase Rock FM! \n
      ✦ Wase Rock FM 93.9MHz ✦ \n
      The People's Voice!`,
      date: "29th June, 2024.",
      image: "/announcement_image.jpg",
      images: [{ pic: "/announcement_image.jpg" }],
    },
    {
      id: "12",
      category: "News",
      title: `PDP GOVERNORS' FORUM COMMISERATES WITH PLATEAU, CONTRIBUTES N100 MILLION TO VICTIMS OF VIOLENT ATTACKS`,
      author: `Gyang Bere Director of Press and Public Affairs to the Executive Governor of Plateau State`,
      content: `The PDP Governors' Forum  has expressed its condolences to the Government and people of Plateau State in the wake of the Christmas eve attacks and recent security breaches in Bokkos, Mangu, and Barkin-Ladi Local Government Areas. As a gesture of solidarity, the Governors contributed N100 Million to aid the survivors.\n
  
  Senator Bala Mohammed, Chairman of the Forum and Governor of Bauchi State, led the delegation to the New Government House in Little Rayfield, Jos.\n 
  
  He conveyed the Forum's sympathy to Governor Caleb Manasseh Mutfwang and the survivors while advocating for the establishment of State Police to address the prevailing security challenges.\n
  
  "We, representing the PDP Governors Forum, extend our heartfelt condolences to you and the people of Plateau. The crisis is unfortunate, and we urge you to remain focused amidst these challenges," Sen. Mohammed remarked.\n
  
  Acknowledging Plateau's role as a home for everyone, he emphasized the need for state-specific security measures. Sen. Mohammed appealed to the Federal Government and security agencies to intensify efforts in tackling the nation's security challenges.\n
  
  Governor Mutfwang, in response, expressed gratitude for the support and committed to fostering unity across faith and ethnicity on the Plateau. He stressed the importance of rebuilding trust among communities to address criminal activities effectively.\n
  
  "As governor, I believe in the unity of our people. If we rebuild trust and treat criminality uniformly, we can overcome these challenges," Governor Mutfwang stated. He affirmed the PDP's significance in Plateau and across Nigeria, pledging to continue delivering democratic dividends to the people.\n
  
  Among the Governors who came for the visit includes,  Sen. Dr. Ademola Adeleke, Osun State, Rt. Hon. Ahmadu Umaru Fintiri, Adamawa State, Seyi Makinde, Oyo State, Godwin Obasake, Edo State, Mr. Peter Mba, Enugu State and the Director General of the PDP Forum, Hon. C.T.O Maduabum.
  `,
      date: "1st February 2024.",
      image: "/govtContribute.jpeg",
      images: [{ pic: "/govtContribute.jpeg" }],
    },
    {
      id: "11",
      category: "News",
      title: `GOVERNOR MUTFWANG VISITS MANGU LG TO COMMISERATE WITH THE VICTIMS OF THE RECENT ATTACK`,
      author: ``,
      content: `Plateau state governor, His Excellency, Gov. Caleb Mutfwang visits  Mangu Local Government to commiserate & sympathize with victims of the recent attack in Mangu. \n
The visit is to also take an on the spot assessment of the level of destruction and ascertain the level of damages in a bid to provide immediate and permanent solutions to the continuous attacks on innocent citizens. \n

God bless Gov. Mutfwang, God bless Plateau state, God bless Nigeria!
 \n`,
      date: "27th January 2024.",
      image: "/mangu.jpeg",
      images: [{ pic: "/mangu.jpeg" }],
    },
    {
      id: "10",
      category: "News",
      title: `PLATEAU CELEBRATES GOVERNOR MUTFWANG'S VICTORY IN THE POLLS AND THE SUPREME COURT IN SOLEMN THANKSGIVING`,
      author: `Gyang Bere.  
Director of Press and Public Affairs to the Executive Governor of Plateau State`,
      content: `Plateau State, on Sunday stood still in solemn praise and thanksgiving to the Almighty God for Governor Caleb Manasseh Mutfwang's triumph in the polls and the subsequent Supreme Court victory.\n

Expressing profound gratitude to God Almighty during the Interdenominational Thanksgiving Service at the Rwang Pam Township Stadium, Jos, Governor Mutfwang attributed his success to divine intervention and dedicated the triumph to both God and the people of Plateau State. \n

He acknowledged with profound gratitude the overwhelming mandate received in the March 18, 2023 polls, and commended the fairness of the justices of the Supreme Court. The Governor also expressed gratitude to President Bola Ahmed Tinubu for his unwavering support for democracy.\n

Amidst cheers from the crowd, Governor Mutfwang extended appreciation to the Media and Nigerians for amplifying the voice of Plateau people throughout the judicial process. He reassured the public that, with divine assistance, he is committed to fulfilling the expectations placed upon him.\n

Governor Mutfwang reflected on the challenges faced during the political journey, expressing moments of doubt but holding onto faith. He emphasized the significance of the victory, marking a new beginning for Plateau State and pledging to lead the state to new heights with the support of the people.\n

He said,  "I want to give thanks to God Almighty, the one who knows how to enthrone kings and how to dethrone kings. I thank God for the privilege he has given me; he singled me out for this honour. I want to thank you, Plateau people for agreeing with God and voting me joyfully without any inducement."\n

He added that the victory marks a new beginning of the fulfillment of the promises he made, promising that by the grace of God he will not fail the people. \n

Former Governor of Adamawa State, Boni Haruna, and other dignitaries including former Military Governor of Plateau State, Major General Lawrence Onoja, Emeka Etiaba SAN, the Gbong Gwom Jos, Da Jacob Buba, former Governor Jonah Jang, the State Chairman, Christian Association of Nigeria, CAN, Rev. Fr. Polycarp Lubo echoed messages of prayer and support for the Governor's mission to build a united and prosperous state. \n

President of the Pentecostal Fellowship of Nigeria, Bishop Francis Oke, in his sermon, drew inspiration from biblical passages, assuring that God would make everything new in all spheres of the State.\n

The event witnessed special prayers, song ministrations, and praises from various church groups, emphasizing the cleansing, healing, and restoration of Plateau. Notable figures such as the Speaker of the Plateau  State House of Assembly, Rt. Hon. Gabriel Dewan, Chief Judge of Plateau State, Justice David Mann, Plateau State PDP Chairman, Hon. Chris Hassan, Chief of Staff Government House Jos, Engr. Jeremiah Satmak, former Senate  Minority Leader, Sen. Simon Mwadkon, Sen. Hezekiah Dimka, General Martin Luther Agwai, Commissioners, top government functionaries among others graced the occasion.\n

In a vote of thanks, the Secretary of the Government of the State, Arc. Samuel Jatau, expressed gratitude for the successful event, where Governor Mutfwang appointed a renowned music artiste Ezra Jinang as the Senior Special Adviser on Creativity and Entertainment.
 \n`,
      date: "21st January 2024.",
      image: "/governor-celebrates.jpeg",
      images: [{ pic: "/governor-celebrates.jpeg" }],
    },
    {
      id: "9",
      category: "News",
      title: `CHAIRMAN WASE LGA AND ALGON CHAIRMAN PLATEAU STATE HAMISU ANANI CONGRATULATES GOV.  CALEB MUTFWANG OVER VICTORY AT THE SUPREME COURT, SAYS VICTORY IS DESERVING`,
      author: ``,
      content: `Chairman, Wase Local Government Area and ALGON Chairman Plateau State, Hamisu Anani, Congratulates His Excellency, Governor Caleb Mutfwan over his victory at the Supreme Court. \n This is coming as Anani in an interview with news men revealed that Gov. Mutfwang's victory is deserving and further reaffirms and validates the love by the good people of Plateau State for Gov. Mutfwang and the People's Democratic Party, PDP as their Popular Choice. \n`,
      date: "16th January, 2024",
      image: "/jan16th.jpeg",
      images: [{ pic: "/jan16th.jpeg" }],
    },
    {
      id: "8",
      category: "News",
      title: `Breaking: Supreme Court reinstates Plateau State Governor, His Excellency Gov. Caleb Mutfwang`,
      author: ``,
      content: `Chairman, Wase Local Government Area and ALGON Chairman Plateau State, Hamisu Anani, Congratulates His Excellency, Governor Caleb Mutfwan over his victory at the Supreme Court.\n This is coming as Anani in an interview with news men revealed that Gov. Mutfwang's victory is deserving and further reaffirms and validates the love by the good people of Plateau State for Gov. Mutfwang and the People's Democratic Party, PDP as their Popular Choice. \n`,
      date: "12th January, 2024",
      image: "/govtVictory.jpeg",
      images: [{ pic: "/govtVictory.jpeg" }],
    },
    {
      id: "7",
      category: "News",
      title: `THE TIC CHAIRMAN OF WASE LGC, HON. HAMISU ANANI WHO WAS ABLY REPRESENTED BY THE DIRECTOR OF SOCIAL SERVICE WASE LGA HAVE FLAGGED OFF THE DISTRIBUTION OF RELIEF MATERIALS TO A CROSS SECTION OF THOSE AFFECTED BY DISASTER WITHIN THE LOCALITY MONTHS AGO.
  `,
      author: `Musab Imamuddeen`,
      content: `The Director of social service of wase LGA on behalf of the TIC chairman of wase LGC Hon. Hamisu Anani today flagged of the distribution of relief materials worth millions donated by the Federal Government through the National Emergency Management Agency (NEMA).\n

The Chairman expressed his appreciation for the singular gesture shown to alleviate the plight of people affected by different degrees of disaster (flood, wind storm) that happened months back within the LGA. \n
In his remark, he called on the beneficiaries to make proper use of the items collected and not to sell it, as the government will frown at such.\n

Items distributed includes sewing machines, water pumps, grinding machines, mattresses, cooking utensils, blankets, pots of different sizes, seedlings, food items, mats, knapsack sprayer, liquid fertiliser, etc.\n
  `,
      date: "26th December, 2023",
      image: "/tic1.jpeg",
      images: [
        { pic: "/tic1.jpeg" },
        { pic: "/tic2.jpeg" },
        { pic: "/tic3.jpeg" },
        { pic: "/tic4.jpeg" },
      ],
      imageArray: ["/tic1.jpeg", "/tic2.jpeg", "/tic3.jpeg", "/tic4.jpeg"],
    },
    {
      id: "1",
      category: "News",
      title: `HON.HAMISU MOHAMMED ANANI TRANSITION IMPLEMENTATION COMMITTEE CHAIRMAN OF WASE LGC,ALGON CHAIRMAN OF PLATEAU STATE CHAPTER FLAGS OFF THE DISTRIBUTION OF FERTILIZER TO FARMERS IN WASE LOCAL GOVERNMENT COUNCIL
  `,
      author: `Musab Imamuddeen`,
      content: `Wase Local government council under the leadership of Hon. Hamisu Anani has commenced the distribution of 3 trucks assorted fertilizers acquired by the executive governor of plateau state His Excellency Barr. Caleb Manaseh Mutfawang for plateau farmers across the 17 local government council in the state for dry season farming. \n
  The TIC chairman informed the people of wase local government the  readiness of the executive governor of plateau state to invest more on agriculture, he said  agriculture is the backbone of the economy and is the major source of livelihood to significant portion of the population, Governor Mutfwang administration will continue to invest in the sector to ensure food security, economic growth and poverty alleviation in the state. \n
  Hon. Anani thanked NG CARES for their immense efforts in supporting plateau state agricultural development.\n
  The representative of the program manager plateau state agricultural development programme laud the efforts of the transition chairman of wase for his remarkable gesture by providing trucks of fertilizer to his local government council at subsidize rate few months ago describing it as the first of its kind ever recorded, the programme manager also urged the wase local government farmers to use the fertilizer to boost the yield of their crops and not resell them, 
  because the TIC chairman have brief them about wase local in terms of agriculture, that was local  government is blessed with fertile land, a dedicate and hard-working farmers, a home of agriculture it is also in record that thousands of trucks loaded with farm products  were dispatched across the country from wase local government every year.
  `,
      date: "26th December, 2023",
      images: [
        { pic: "/anani.jpeg" },
        { pic: "/anani1.jpeg" },
        { pic: "/anani4.jpeg" },
      ],
      image: "/anani.jpeg",
    },
    {
      id: "2",
      category: "News",
      title:
        "TRANSITION COMMITTEE CHAIRMEN IN PLATEAU CONDEMN  ATTACKS IN PLATEAU COMMUNITIES, CALL FOR ARREST OF PERPETRATORS",
      author:
        "Hamisu Anani . Transition Committee chairman wase and plateau state ALGON Chairman",
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
      date: "26th December, 2023",
      images: [{ pic: "/himisu.jpeg" }],
      image: "/himisu.jpeg",
    },
    {
      id: "3",
      category: "News",
      title:
        "FREE CHRISTMAS TRIP TO ALL LGA HQs COMMENCES TOMMORROW BY GOVERNOR CALEB MANASEH MUTFAWANG",
      author: "Agency Reporter",
      content: `The executive governor of plateau state His Excellency Barr.  Caleb manaseh Mutfawang has approved free ride from Jos metropolis to all local government headquarters in the state. \n
The pickup station is plateau polytechnic  Jos to the various local government Hqs, passengers ready to travel out of their local government to Jos city are advise to wait for the first turn of the bus in their various local government to have a free ride. \n
The free ride will commence on Saturday 23/12/2023 and end on  Wednesday 26/12/2023
`,
      date: "DECEMBER 26, 2023",
      images: [{ pic: "/freetp.webp" }],
      image: "/freetp.webp",
    },
    {
      id: "4",
      category: "News",
      title:
        "Plateau Muslim community backs Gov Muftwang, dismisses rumoured marginalisation",
      author: "Agency Reporter",
      content: `Contrary to the insinuation that the Muslims in Plateau State are not represented in the cabinet of Governor Caleb Muftwang, the leadership of the Muslim Umma in the state has condemned the insinuation and declared that the Muslims are adequately represented. \n
      
      Addressing newsmen in Jos, Plateau State, the spokesman of the Muslim Umma, Mubarak Isa, said the governor has a good relationship with the Umma, adding that this has resulted in the appointment of Muslims into various positions of authority in the six-month-old Muftwang administration. \n

      According to him, the relationship between the governor, the government, and the Muslim community is less than savory, adding that those behind the insinuation simply want to soil a good relationship. \n
      He said, “We have come before you this day all the leadership of Muslim ummah from all parts of Plateau State to pass a vote of confidence on the Executive Governor of Plateau State, Barr. Caleb Muftwang, on his six months of unprecedented achievements.
      \n

      “This governor and government have shown that the dividends of democracy can reach the common man from the first day in office. The Caleb Mutftwang-led “The Time is Now” administration has displayed the spirit of oneness, brotherhood, and development.\n

“With this background, we want to state categorically that Gov. Caleb Muftwang is a unifier. That’s the reason we want to air our view about Muftwang and tell the world about his appointments and achievements with the Muslim community in Plateau State.`,
      date: "FEBRUARY 23, 2023",
      images: [{ pic: "/muslim.jpeg" }],
      image: "/muslim.jpeg",
    },
    {
      id: "5",
      category: "News",
      title: "Gov. Mutfwang signs 2024 Appropriation Bill into law",
      author: "Agency Reporter",
      content: `His Excellency, the Executive Governor of Plateau State, Governor, Caleb Mutfwang has signed the state’s 2024 budget of N314.8 billion into law, his media aide, Mr Gyang Bere, stated on Wednesday in Jos. \n 

        Christened “Budget of New Beginnings", the 2024 budget has a recurrent expenditure component of N162.3 billion and capital expenditure of N152.5 billion. \n 

        "As governor, this Appropriation Bill encapsulates our vision to transform Plateau into a citadel of glory.\n 

        “We believe Plateau deserves better than what was previously in place.\n 

        “We encountered a state of neglect in critical sectors and we are determined to lay a new foundation for a sustainable, excellent, and value-adding future.\n He expressed optimism that the budget implementation would improve the living conditions of the people and urged citizens to support the government for continued progress.`,
      date: "FEBRUARY 23, 2023",
      images: [{ pic: "/govtbill.png" }],
      image: "/govtbill.png",
    },
    {
      id: "6",
      category: "News",
      title: "Police rescue abducted Plateau pastor, three others in Bauchi",
      author: "Agency Reporter",
      content: `The Bauchi State Police Command said its operatives have rescued four people kidnapped by bandits who invaded Raddi village via Bassa Local Government Area of Plateau State on Wednesday.\n

The state Police Public Relations Officer, Ahmed Wakil, a Superintendent of Police, disclosed this in a statement made available to journalists on Wednesday.\n

Wakil said  the bandits had stormed the house of one Yakubu Makeri, of Yagi village via Rahama ward, with the intention of attacking him but a team of operatives attached to Rishi Police Divisional Headquarters in conjunction with local vigilantes swiftly moved to the scene and engaged the bandits in a gun battle.\n

He stated that the Commissioner of Police has ordered the Divisional Police Officer to intensify wider patrol across the  area in a bid to arrest the fleeing bandits so they can face the full wrath of the law.`,
      date: "FEBRUARY 23, 2023",
      images: [{ pic: "/policeLogo.jpeg" }],
      image: "/policeLogo.jpeg",
    },
  ]);

  const [programmes, setProgrammes] = useState([
    {
      id: "1",
      category: "programmes",
      title: "Sirin Noma",
      content: ``,
      date: "26th December, 2023",
      image: "/sirinNoma.jpeg",
    },
    {
      id: "2",
      category: "programmes",
      title: "Ilimin Kasuwanci",
      content: ``,
      date: "26th December, 2023",
      image: "/llimin.jpeg",
    },
    {
      id: "3",
      category: "programmes",
      title: "Dogaro da Kai",
      content: ``,
      date: "26th December, 2023",
      image: "/dogarodakai.jpeg",
    },
    {
      id: "4",
      category: "programmes",
      title: "Kasuwar Wase",
      content: ``,
      date: "26th December, 2023",
      image: "/kasuwarwuse.jpeg",
    },
    {
      id: "5",
      category: "programmes",
      title: "Siyasa ba Gaba ba",
      content: ``,
      date: "26th December, 2023",
      image: "/siyasa.jpeg",
    },
    {
      id: "6",
      category: "programmes",
      title: "Kacici Kacici",
      content: ``,
      date: "26th December, 2023",
      image: "/kacici.jpeg",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <DataContext.Provider value={{ news, programmes }}>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/waserock_radio' element={<Home />} />
            <Route path='/wase_rocktv' element={<Home />} />
            <Route path='/wase_podcast' element={<Home />} />
            <Route path='/news/:id' element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/waserock_93.9" element={<MobileRadio />} />
            {<Route path="/wase_rocktv" element={<MobileTv />} />}
            <Route path="/wase_podcast" element={<Mobilepodcast />} />
            <Route path="/news/:id" element={<MobilenewsDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/programes" element={<Programes />} />
            <Route path="/admin" element={<Adminhome />} />
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
      <div className="home-container"></div>
    </div>
  );
}

export default App;

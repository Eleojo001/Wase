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
                  src='https://www.youtube.com/embed/iul8beIsk5Q?si=53AEUvYXBe9TWqeo'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
              <div className='mtvtitle'>
                16 Million Naira Tuition Fee Scholarship for indigenes of Wase
                into Tertiary Institution
              </div>
            </a>
          </div>
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
                  src='https://www.youtube.com/embed/lZ0cZ1Cd5Y0?si=KQKQlQCk4l3aYZkL'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
              <div className='mtvtitle'>
                Muslim Ummah in Plateau State, gather to pray for Justice and
                Victory for Governor Caleb Mutfwang of Plateau State.
              </div>
            </a>
          </div>
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
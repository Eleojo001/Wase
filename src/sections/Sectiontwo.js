import React from 'react'
import { SiDropbox } from 'react-icons/si';

function Sectiontwo() {
  return (
    <div>
      <div className='sectionTwoholder'>
        <p>
          <span >Trusted by the world's best companies</span>[social proof to build
          credibilty]
        </p>

        <div className='socialProofSec'>
          <li>
            <p>Relum</p>
            <div>
              <SiDropbox style={{ color: '#ee2625' }} />
            </div>
          </li>
          <li>
            <p>Webflow</p>
            <div>
              <SiDropbox />
            </div>
          </li>
          <li>
            <p>Relum</p>
            <div>
              <SiDropbox style={{ color: '#ee2625' }} />
            </div>
          </li>
          <li>
            <p>Webflow</p>
            <div>
              <SiDropbox />
            </div>
          </li>
          <li>
            <p>Relum</p>
            <div>
              <SiDropbox />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo
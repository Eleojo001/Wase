import React, {useState} from 'react';
import { TiThMenu } from 'react-icons/ti';

function Navmobile() {
  const [active, setActive] = useState('dropDownMenuM');

  function Mobilehide(e) {
    e.preventDefault();
    if (active === 'dropDownMenuM') {
      setActive('mobileDeactive');
    } else {
      setActive('dropDownMenuM');
    }
  }
  return (
    <div>
      <div className='navmobile'>
        <div className='mobileNavlogo'>
          <a href='/' className='m-navlink'>
            <img src='favicon.ico' alt='Logo of the website' />
          </a>
        </div>
        <div className='mobileTogggle'>
          <TiThMenu onClick={(e) => Mobilehide(e)} />
          <div className={active}>
            <li>
              <a href='/' className='m-navlink'>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className='m-navlink'>
                About
              </a>
            </li>
            <li>
              <a href='/' className='m-navlink'>
                programs
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navmobile
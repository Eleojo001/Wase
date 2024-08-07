import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';

function SectionFive() {
  return (
    <div>
      <div className='sectionfiveHolder'>
        <div className='FooterCategory'>
          <div className='footcatGrid'>
            <div className='footcardItem'>
              <div className='Tradmark'>
                <h4>Trade</h4>
                <li>&copy; 2023</li>
                <li>Privacy-Terms</li>
              </div>
            </div>
            <div className='footcardItem'>
              <h4>Adress</h4>
              <ul className='futitems'>
                <li>Wase, Plateau state, Nigeria</li>
              </ul>
            </div>
            <div className='footcardItem'>
              <h4>Social Media</h4>
              <ul className='futitems'>
                <li>
                  <a href='#' className='d_navlink'>
                    <SiFacebook size={'1.5rem'} style={{color:'black'}} />
                  </a>
                </li>
                <li>
                  <a href="#" className="d_navlink">
                  <IoLogoWhatsapp size={'1.5rem'} />
                  </a>
                </li>
                <li>
                <a href="#" className="d_navlink">
                  <BsTwitterX size={'1.5rem'} />
                </a>
                </li>
                <li>
                <a href="#" className="d_navlink">
                  <FaInstagramSquare size={'1.5rem'} />
                </a>
                </li>
                <li>
                <a href="#" className="d_navlink">
                  <SiGmail size={'1.5rem'} />
                </a>
                </li>
              </ul>
            </div>
            <div className='footcardItem'>
              <h4>Contact</h4>
              <ul className='futitems1'>
                <li>081 xxxx xxxx</li>
                <li>+234 xxx xxxx</li>
                <li>+234 xxx xxxx</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive
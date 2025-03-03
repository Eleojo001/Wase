import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { FaYoutube } from "react-icons/fa6";

function SectionFive() {
  return (
    <div>
      <div className="sectionfiveHolder">
        <div className="FooterCategory">
          <div className="footcatGrid">
            <div className="footcardItem">
              <div className="Tradmark">
                <h4>Trade</h4>
                <li>&copy; 2023</li>
                <li>Privacy-Terms</li>
              </div>
            </div>
            <div className="footcardItem">
              <h4>Adress</h4>
              <ul className="futitems">
                <li>Wase, Plateau state, Nigeria</li>
              </ul>
            </div>
            <div className="footcardItem">
              <h4>Social Media</h4>
              <ul className="futitems">
                <li>
                  <a
                    href="https://www.facebook.com/share/18yRkLNVma/"
                    className="d_navlink"
                  >
                    <SiFacebook size={"1.5rem"} style={{ color: "black" }} />
                  </a>
                </li>
                <li>
                  <a href="#" className="d_navlink">
                    <IoLogoWhatsapp size={"1.5rem"} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/waserocktv/status/1896695723275735432?t=5BwLBu9vN1vefglttTv1Yw&s=08"
                    className="d_navlink"
                  >
                    <BsTwitterX size={"1.5rem"} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/waserock.tv?igsh=MW16NWlwcW5qbTdkcQ=="
                    className="d_navlink"
                  >
                    <FaInstagramSquare size={"1.5rem"} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@waserock-gj4mr?si=SvdCEirWBH2WxKIY"
                    className="d_navlink"
                  >
                    <FaYoutube size={"1.5rem"} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footcardItem">
              <h4>Contact</h4>
              <ul className="futitems1">
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
import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";

function Mobilefooter() {
  return (
    <div>
      <div className="mobileFooter">
        <div className="mobilefooterholder">
          <div className="termMobile">
            <li>
              <h5>Terms/Condition</h5>
            </li>
            <li>
              <h5>Contact</h5>
              <p className="contactIcons">
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
              </p>
            </li>
          </div>
          <div className="mobileaddress">
            <li>
              <h5>Address</h5>
              <p> Wase, Plateau State, Nigeria</p>
            </li>
          </div>
        </div>
        <div className="Jomiah">&copy; 2023 Created by JomiahCreations</div>
      </div>
    </div>
  );
}

export default Mobilefooter
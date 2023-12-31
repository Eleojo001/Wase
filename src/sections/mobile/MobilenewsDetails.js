import React, {useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../App';
import { BsDot } from 'react-icons/bs';
import Navmobile from './Navmobile';


function MobilenewsDetails() {
    const category = useContext(DataContext);
  const { id } = useParams();
  let data = category.news;

  return (
    <div>
      <Navmobile />
      <div className='mNewsDetails'>
        <div className='mNewsDetailsImg'></div>
        <div className='mnewDetailsContent'>
          {data.map((item) => {
            if (item.id == id) {
              return (
                <div key={item.id}>
                  <h3 className='m-headersFont'>{item.title}</h3>

                  <p className=' mdetails-content-author'>
                    {item.author} <BsDot size={'1rem'} />{' '}
                    <span>{item.date}</span>
                  </p>
                  <div className='newdimagcontainer'>
                    <div className='m-dtailsBannerimage'>
                      {item.images.map((pic, index) => {
                        return (
                          <div className='nwsdcarddet'>
                            <div className='mdbannerimg'>
                              <img src={pic.pic} key={index} alt='' />
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* <div className='nwsdcarddet'>
                        <div className='mdbannerimg'>
                          <img src={item.image} alt='' />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {item.content.split('\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className='m-banner-content'
                      style={{ fontSize: '18px', lineHeight: '1.5' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            }
          })}
        </div>
        <Link to={-1} style={{ textDecoration: 'none' }}>
          <button className='sec3btn'>
            <span style={{ width: '50px', height: '50px' }}>
              {/* <img src='/go_back_icon.png' alt='' style={imageStyle} /> */}
            </span>
            <span>Go back</span>
            <span style={{ width: '50px', height: '50px' }}>
              {/* <img src='/go_back_icon.png' alt='' style={imageStyle} /> */}
            </span>
          </button>
        </Link>
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

export default MobilenewsDetails
import React, {useState,  useEffect} from 'react'
import Nav from '../Nav'
export default function About() {
  const bg ={
    background:'white',
    color:'black',
  }
  const [data, setData] = useState('');
  const handleClick = () =>{
    window.open('https://www.sarmanfarms.com/services/', '_blank');
  }
  const imgStyle = {
    width:'100%',
    height:'100%',
    objectFit:'cover',
  }
  useEffect(()=>{
    setData(`HIMMA Radio and Television by Sarman Integrated Farms Limited is dedicated to further extension and propagation of agricultural practices within its locality.

Whether you are a farmer, researcher, or simply passionate about agriculture, our human-touch radio service will keep you informed, inspired, and connected to the pulse of the agricultural community.


 `);
  },[])
  return (
    <div>
      <Nav />
      <div className='about-container' style={bg}>
        <h1 className='headersFont'>About Us</h1>
        <p className='about-content'>
          <div className="govt">
            <div className="govtImg"><img src="/govt.jpeg" alt="" /></div>
            <div className="govtChair"></div>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
            Wase Rock Broadcasting Service is a diversified broadcasting
            platform with holdings in Radio, Television among other businesses.
            . <br />
            <br />
            It is made up of Wase Rock FM and Wase Rock TV with the following
            live channels: <br />
            <br />
            <li>News</li>
            <li>Current Affairs</li>
            <li>Youth & Sports</li>
            <li>Entertainment</li>
            <li>Agriculture and Trade</li> <br />
            <br />
            <h1 className='headersFont'>Our Vision</h1>
            Our vision is to serve our community with the most credible and
            trusted information for growth and development. <br />
            <h1 className='headersFont'>Our Mission</h1>
            Our mission is to use broadcasting as a tool for unity, peace,
            growth and development. <br />
            <h1 className='headersFont'>Our Core Values</h1>
            <ul>
              <li>Respect and value for local knowledge and innovations</li>
              <li>Value for the environment and ecosystems</li>
              <li>Professional, effective, and informed by relevant science</li>
              <li>Creative, flexible, and innovative</li>
              <li>Sensitive to gender</li>
              <li>Quality, equality, and ethics</li>
              <li>Passion. </li>
            </ul>
          </p>
        </p>
        <div>
          <button
            style={{
              border: 'none',
              background: 'inherit',
              color: 'black',
            }}
          >
            <a
              href='#'
              onClick={handleClick}
              style={{
                border: 'none',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
              }}
            >
              Read More
            </a>
          </button>
        </div>

        <div className='photogallary'>
          <div className='photoGrid'>
            <div className='photo'>
              <div className='photoImage'>
                <img src='Sarman-farms-1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='Chicken-layers.jpg' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='veg2.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='fruits1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='slider121.png' style={imgStyle} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

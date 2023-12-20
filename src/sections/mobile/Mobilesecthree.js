import React from 'react'

function Mobilesecthree() {
  return (
    <div>
      <div className='mobilesec3holder'>
        <h1 style={{ color: '#ee2625' }}>News</h1>
        <p className='sec3headerDescp'>
          "Our services are top notch with up-to-date insite on the latest
          happenings within and outsie the country Nigeria"
        </p>
        <div className='section3grid'>
          <div className='sec3card'>
            <div className='sec3cardimg'>
              <img src='/llimin.jpeg' alt='' />
            </div>
            <div className='sec3carddescp'>Llimin</div>
            <div className='sec3cardbtn'>
              <button className='sec3btn'>Read more</button>
            </div>
          </div>
          <div className='sec3card'>
            <div className='sec3cardimg'>
              <img src='/dogarodakai.jpeg' alt='' />
            </div>
            <div className='sec3carddescp'>Dogarodakai</div>
            <div className='sec3cardbtn'>
              <button className='sec3btn'>Read more</button>
            </div>
          </div>
          <div className='sec3card'>
            <div className='sec3cardimg'>
              <img src='/kasuwarwuse.jpeg' alt='' />
            </div>
            <div className='sec3carddescp'>Kasuwarwuse</div>
            <div className='sec3cardbtn'>
              <button className='sec3btn'>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilesecthree
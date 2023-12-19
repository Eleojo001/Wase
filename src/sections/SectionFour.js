import React from 'react'

function SectionFour() {
  return (
    <div>
      <div className='sectionFourHolder'>
        <h1 style={{ color: '#ee2625' }}>News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cum
          sequi fugit in dicta doloremque!
        </p>

        <div className='sectionFourGrid'>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='dogarodakai.jpeg' alt='' />
            </div>
            <p className='sec4descp'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              tempore!
            </p>
            <div className='sec4btn'>Read More</div>
          </div>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='dogarodakai.jpeg' alt='' />
            </div>
            <p className='sec4descp'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              tempore!
            </p>
            <div className='sec4btn'>Read More</div>
          </div>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='dogarodakai.jpeg' alt='' />
            </div>
            <p className='sec4descp'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              tempore!
            </p>
            <div className='sec4btn'>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour
import React from 'react'

const Background = () => {
  return (
    <>
      <div className="hero-container">
        {/* <video src="/video/video-2.mp4" autoPlay loop muted></video> */}
        <h1>HIDAYA HALAQAH</h1>
        <p
        style={{
            fontSize: '20px',
            borderBlock: '2px solid',
            paddingTop: '10px',
            fontWeight: 'bolder',
            color: 'white',
        }}
        >Join us every Friday at 5 PM</p>
        <div className="hero-btns">
          
          {/* <a href="">
            <Button type="" color="primary" onClick={() => console.log("Clicked")}>
              ABOUT US
            </Button>
          </a> */}
        </div>
      </div>
    </>
  )
}

export default Background
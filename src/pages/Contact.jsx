import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container-contact'> 
          <div > 
            <input type="text"  required/>
            <input type="email" id="email" required/>
          </div>
          <div>
            <textarea name="message" id="messafe" cols="60" rows="10"></textarea>
          </div>
          
      </div>
    </>
  ) 
  }
export default Contact

// id="gem-input-comment"  type="text" ref={gemRef} 

import React from 'react'
import Counter from '../components/Counter'

const Dhikr = () => {
  return (
    <>
     <div className="dhikrCounter">
    <p>Dhikr</p>
    <div style={{border:"2px solid white" , padding:"45px"}} >
        <h1>أستغفر الله</h1>
     <Counter/>
    </div>
     <div style={{border:"2px solid white" , padding:"10px"}}>
        <h1>الحمدلله</h1>
     <Counter/>
     </div>
     <div style={{border:"2px solid white" , padding:"10px"}}>
        <h1>الله أكبر</h1>
     <Counter/>
     </div>
     
     </div>
    </>
  )
}

export default Dhikr
import React from 'react'
import Counter from '../components/Counter'

const Dhikr = () => {
  return (
    <>
     <div className="dhikrCounter">
    <p>Dhikr</p>
     <h1>أستغفر الله</h1>
     <Counter/>
     <h1>الحمدلله</h1>
     <Counter/>
     <h1>الله أكبر</h1>
     <Counter/>
     </div>
    </>
  )
}

export default Dhikr
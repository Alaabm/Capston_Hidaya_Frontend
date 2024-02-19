import React from 'react'
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dhikr.css";

const AlhamdulilahCounter = () => {
  return (
    <>
        {/* BUTTON LINKS FOR INDIVIDUAL DHIKIR COUNTERS  */}
        <div className="button-container">
            <div className="button-link">
                <ButtonLink
                route="./alhamdulilahCounter"
                buttonLinkText="الحمد لله"
                ></ButtonLink>
            </div>
            <div  className="button-link">
                <ButtonLink
                route="./allahuakbarCounter"
                buttonLinkText="الله أكبر"
                ></ButtonLink>
            </div>
            <div  className="button-link"> 
                <ButtonLink
                route="./subhanallahCounter"
                buttonLinkText="سبحان الله "
                ></ButtonLink>
            </div>
        </div>
    
    {/* COUNTER CONTAINER */}
        <div className="container-dhikr">
        <div className="dhikr-card">
               <div className="dhikr-content">
               <h1 > الحمد الله</h1>
                     <div style={{paddingBottom:"20pt"}}> 
                        <Counter />
                        </div>
               </div>
        </div>
        </div>
    
    </>
  )
}

export default AlhamdulilahCounter


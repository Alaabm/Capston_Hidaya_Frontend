import React from 'react'
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dhikr.css";

const AlhamdulilahCounter = () => {
  return (
    <>
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
    
        <div  style={{paddingBottom:"20pt", textAlign:"center"}}>
        <p style={{textAlign:"center", fontSize:"45pt"}}>الحمد لله  </p>
        
        <div style={{width:"400px", paddingLeft:"380pt"}}>
                <Counter />
        </div>
        </div>
    
    </>
  )
}

export default AlhamdulilahCounter

// style={{fontSize:"40pt", textAlign:"center",  paddingLeft:"50pt",  paddingRight:"50pt", paddingTop:"50pt", height:"0pt", width:"970pt"}}
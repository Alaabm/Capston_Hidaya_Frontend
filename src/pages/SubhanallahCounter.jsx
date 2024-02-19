import React from 'react'
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dhikr.css";

const SubhanallahCounter = () => {
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
        <p style={{textAlign:"center", fontSize:"45pt"}}>     سبحان الله </p>
        
        <div style={{width:"400px", paddingLeft:"380pt"}}>
                <Counter />
        </div>
        </div>
    </>
  )
}

export default SubhanallahCounter
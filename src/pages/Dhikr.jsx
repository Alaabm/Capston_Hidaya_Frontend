import React from "react";
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dhikr.css";
// import "../styles/Dua.css";



const Dhikr = () => {
 

return (
    <>
      <div>
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

         <div className="container-counter"> 
         <div className="dhikr-counter">
            <p style={{fontSize:"40pt", textAlign:"center",  padding:"50pt", height:"0pt", width:"150pt"}}>سبحان الله </p>
            <div style={{paddingBottom:"20pt"}}> 
               <Counter />
            </div>
            
         </div>
         <div className="dhikr-counter">
            <p style={{fontSize:"40pt",  textAlign:"center", padding:"50pt", height:"0pt", width:"150pt"}}>الحمدلله</p>
            <Counter />
         </div>
         <div className="dhikr-counter">
            <p style={{fontSize:"40pt",  textAlign:"center",  padding:"50pt", height:"0pt", width:"150pt"}}>الله أكبر</p>
            <Counter />
         </div>
         </div>
      </div>
         
    </>
  );
};

export default Dhikr;

// style={{ border: "2px solid white", padding: "45px" }}
import React from "react";
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../App.css";


const Dhikr = () => {
 

return (
    <>
      <div>
      <div>
         <div>
               <ButtonLink
               route="./alhamdulilahCounter"
               buttonLinkText="الحمد لله"
               ></ButtonLink>
         </div>
         <div>
               <ButtonLink
               route="./allahuakbarCounter"
               buttonLinkText="الله أكبر"
               ></ButtonLink>
         </div>
         <div>
               <ButtonLink
               route="./subhanallahCounter"
               buttonLinkText="سبحان الله "
               ></ButtonLink>
         </div>
      </div>
          
      
      <p>Dhikr</p>
      <div className="dhikr-counter"> 
         <div >
            <h1>سبحان الله </h1>
            <Counter />
         </div>
         <div >
            <h1>الحمدلله</h1>
            <Counter />
         </div>
         <div >
            <h1>الله أكبر</h1>
            <Counter />
         </div>
         </div>
      </div>
         
    </>
  );
};

export default Dhikr;

// style={{ border: "2px solid white", padding: "45px" }}
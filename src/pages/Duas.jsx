import React from "react";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dua.css";
// import "../App.jsx";

const Duas = () => {
  return (
    <>
    <div className="dua-container">
        {/* <div>
          <ButtonLink
            route="./morningAthkar"
            buttonLinkText="Morning Athkar / أذكار الصباح"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./eveningAthkar"
            buttonLinkText="Evening Athkar/أذكار المساء"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./sleepDua"
            buttonLinkText="Before Sleeping/الدعاء قبل النوم"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./wakeDua"
            buttonLinkText="After Waking Up /الدعاء بعد الاستيقاظ"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./istikharaDua"
            buttonLinkText="Istikhara:The Prayer of Seeking Guidance/"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./calamityDua"
            buttonLinkText="When Afflicted by Calamity"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./successDua"
            buttonLinkText="Dua for Success"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./anxietyDua"
            buttonLinkText="Anxiety and Worry"
          ></ButtonLink>
        </div> */}


    <div className="container">

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Morning Athkar</h5>
              <h3>أذكار الصباح</h3>
                <ButtonLink
                  route="./morningAthkar"
                  buttonLinkText="Dua"
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Evening Athkar</h5>
              <h3> أذكار المساء</h3>
              <ButtonLink
                route="./eveningAthkar"
                buttonLinkText="DUA"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Before Sleeping</h5>
              <h3> الدعاء قبل النوم</h3>
                <ButtonLink
                  route="./sleepDua"
                  buttonLinkText="Before Sleeping/الدعاء قبل النوم"
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>After Waking Up</h5>
              <h3>الدعاء بعد الاستيقاظ</h3>
              <ButtonLink
                route="./wakeDua"
                buttonLinkText="After Waking Up /الدعاء بعد الاستيقاظ"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Istikhara:The Prayer of Seeking Guidance</h5>
              <h3>دعاء الاستخار</h3>
              <ButtonLink
                route="./istikharaDua"
                buttonLinkText="Istikhara:The Prayer of Seeking Guidance/"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Anxiety and Worry</h5>
                <h3></h3>
                <ButtonLink
                  route="./anxietyDua"
                  buttonLinkText="Anxiety and Worry"
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Success</h5>
                <h3></h3>
              <ButtonLink
                route="./successDua"
                buttonLinkText="Dua for Success"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>When Afflicted by Calamity</h5>
                <h3></h3>
                <ButtonLink
                    route="./calamityDua"
                    buttonLinkText="When Afflicted by Calamity"
                ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Good Character</h5>
                <h3></h3>
                <ButtonLink
                    route="./characterDua"
                    buttonLinkText="Dua"
                ></ButtonLink>
            </div>
          </div>

          
          
          
      </div>
    </div>
    </>
  );
};

export default Duas;

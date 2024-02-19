import React from "react";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dua.css";
// import "../App.jsx";

const Duas = () => {
  return (
    <>
    <div className="dua-container">
        <div>
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
        </div>


    <div className="card-row">

          <div className="card">
            <div className="card-body">
              <h5 style={{className:"card-title"}}>Anxiety and Worry</h5>
                <ButtonLink
              route="./anxietyDua"
              buttonLinkText="Anxiety and Worry"
            ></ButtonLink>
            </div>
          </div>
            
          <div className="row">
            <div className="card-body">
              <h5 style={{className:"card-title"}}>Dua for Success</h5>
              <ButtonLink
            route="./successDua"
            buttonLinkText="Dua for Success"
          ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="column">

                  <div className="card-body">
                      <h5 style={{className:"card-title"}}>When Afflicted by Calamity</h5>
                      <ButtonLink
                    route="./calamityDua"
                    buttonLinkText="When Afflicted by Calamity"
                  ></ButtonLink>
                    </div>

            </div>
            
          </div>
          
          
      </div>
    </div>
    </>
  );
};

export default Duas;

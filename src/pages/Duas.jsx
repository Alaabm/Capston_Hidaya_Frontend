import React from "react";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dua.css";
// import "../App.jsx";

const Duas = () => {
  return (
    <>
    <div className="dua-container"
        style={{
          // paddingTop: '60px',
          // paddingBottom: '60px',
          // margin: '20px'
        }}
    >
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
                  route="./dua/morningAthkar"
                  buttonLinkText="Dua"
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Evening Athkar</h5>
              <h3> أذكار المساء</h3>
              <ButtonLink
                route="./dua/eveningAthkar"
                buttonLinkText="Dua"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Before Sleeping</h5>
              <h3> الدعاء قبل النوم</h3>
                <ButtonLink
                  route="./dua/sleepDua"
                  buttonLinkText=" Dua "
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>After Waking Up</h5>
              <h3>الدعاء بعد الاستيقاظ</h3>
              <ButtonLink
                route="./dua/wakeDua"
                buttonLinkText=" Dua"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Istikhara:The Prayer of Seeking Guidance</h5>
              <h3>دعاء الاستخاره </h3>
              <ButtonLink
                route="./dua/istikharaDua"
                buttonLinkText="Dua"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Anxiety and Worry</h5>
                <h3>دعاء الهم والحزن</h3>
                <ButtonLink
                  route="./dua/anxietyDua"
                  buttonLinkText="Dua"
                ></ButtonLink>
            </div>
          </div>
            
          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Success</h5>
                <h3>دعاء التوفيق والنجاح</h3>
              <ButtonLink
                route="./dua/successDua"
                buttonLinkText="Dua"
              ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>When Afflicted by Calamity</h5>
                <h3>دعاء عند المصيبة</h3>
                <ButtonLink
                    route="./dua/calamityDua"
                    buttonLinkText="Dua"
                ></ButtonLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h5 style={{className:"card-title"}}>Good Character</h5>
                <h3>دعاء حسن الخُلق</h3>
                <ButtonLink
                    route="./dua/characterDua"
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

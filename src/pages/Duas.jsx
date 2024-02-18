import React from "react";
import ButtonLink from "../components/ButtonLink";
// import "../styles/Dua.css";
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
      </div>
    </>
  );
};

export default Duas;

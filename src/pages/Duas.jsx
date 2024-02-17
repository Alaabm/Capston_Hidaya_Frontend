import React from "react";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dua.css";

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
            buttonLinkText="Dua Before Sleeping/الدعاء قبل النوم"
          ></ButtonLink>
        </div>
        <div>
          <ButtonLink
            route="./wakeDua"
            buttonLinkText="Dua After Waking/الدعاء قبل النوم"
          ></ButtonLink>
        </div>
      </div>
    </>
  );
};

export default Duas;

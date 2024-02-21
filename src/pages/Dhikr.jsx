import React from "react";
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";
import "../styles/Dua.css";
// import "../styles/Dua.css";

const Dhikr = () => {
  return (
    <>
      <div
        className="button-container"
        style={
          {
            // paddingTop: '5px',
            // paddingBottom: '17px',
            // margin: '100px'
          }
        }
      >
        <div className="button-link">
          <ButtonLink
            route="./dhikr/alhamdulilahCounter"
            buttonLinkText="الحمد لله"
          ></ButtonLink>
        </div>
        <div className="button-link">
          <ButtonLink
            route="./dhikr/allahuakbarCounter"
            buttonLinkText="الله أكبر"
          ></ButtonLink>
        </div>
        <div className="button-link">
          <ButtonLink
            route="./dhikr/subhanallahCounter"
            buttonLinkText="سبحان الله "
          ></ButtonLink>
        </div>
      </div>

      <div className="container-dhikr">
        <div className="dhikr-card">
          <div className="dhikr-content">
            <h1> سبحان الله</h1>
            <div style={{ paddingBottom: "20pt" }}>
              <Counter />
            </div>
          </div>
        </div>

        <div className="dhikr-card">
          <div className="dhikr-content">
            <h1>الحمد لله</h1>
            <div style={{ paddingBottom: "20pt" }}>
              <Counter />
            </div>
          </div>
        </div>

        <div className="dhikr-card">
          <div className="dhikr-content">
            <h1> الله أكبر</h1>
            <div style={{ paddingBottom: "20pt" }}>
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dhikr;

// style={{ border: "2px solid white", padding: "45px" }}

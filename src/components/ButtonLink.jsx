import React from "react";
import "../styles/Dhikr.css";

const ButtonLink = (props) => {

  return (
    <>
        <div >
            <button className="button-link">
                <a href={props.route}>{props.buttonLinkText}</a>
            </button>
        </div>
    </>
  );
};



export default ButtonLink;

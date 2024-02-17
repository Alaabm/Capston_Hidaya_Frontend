import React from "react";

const ButtonLink = (props) => {

  return (
    <>
        <div className="button-link">
            <button >
                <a href={props.route}>{props.buttonLinkText}</a>
            </button>
        </div>
    </>
  );
};



export default ButtonLink;

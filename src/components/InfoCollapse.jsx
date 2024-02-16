import { useState } from 'react';

function InfoCollapse(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick ={() => setOpen(!open)}>{props.buttonText}</button>
        {open? <div>{props.children}</div> : ""}
      </div>
    </>
  );
}

export default InfoCollapse;


import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const EveningAthkar = () => {
  return (
    <>
    <div>
    <h1>Evening Remembrance</h1>
    <div className="ayat-alkursi">
        <p style={{ fontSize: "17pt" }}>
          
        </p>
        <div className="evening-collapse">
          <InfoCollapse buttonText="Transliteration">
            <p>
              
            </p>
          </InfoCollapse>
          <br />
          <InfoCollapse buttonText="Translation">
            <p>
              
            </p>
          </InfoCollapse>
        </div>
      </div>
<hr />



    </div>
    </>
    
  )
}

export default EveningAthkar
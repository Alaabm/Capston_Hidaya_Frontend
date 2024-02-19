import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const SuccessDua = () => {
  return (
    <>
        <h1 style={{color:"rgb(90, 95, 295)"}}>Dua for Success</h1>
        <div className="card-dua">
            <div className="card-content-dua">
              </div>
                      <div className="success-dua">
                      <p style={{ fontSize: "17pt" }}>
                      إِنَّا لِلهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي ، وَاخْلُفْ لِي خَيْرًا مِنْهَا
                      </p>
                      <InfoCollapse buttonText="Transliteration">
                          <p>Wama tawfeeqee illa billahiAAalayhi tawakkaltu wa-ilayhi oneeb</p>
                      </InfoCollapse >
                      <InfoCollapse buttonText="Translation">
                          <p>My success is not but through Allah. Upon him I have relied, and to Him I return.</p>
                      </InfoCollapse>
                      </div>
            </div>
       
    </>
  )
}

export default SuccessDua
import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const SuccessDua = () => {
  return (
    <>
      <h2 style={{color:"rgb(37, 137, 225)"}}> Dua for Success</h2>
      <h2>  دعاء التوفيق والنجاح</h2>
        <div 
        style={{
          minHeight:"50vh",
        }}
        className="card-dua">
            <div className="card-content-dua">
              </div>
                      <div className="success-dua">
                      <p style={{ fontSize: "17pt" }}>
                      إِنَّا لِلهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي ، وَاخْلُفْ لِي خَيْرًا مِنْهَا
                      </p>
                      <br />
                      <InfoCollapse buttonText="Transliteration">
                          <p>Wama tawfeeqee illa billahiAAalayhi tawakkaltu wa-ilayhi oneeb</p>
                      </InfoCollapse >
                      <br />
                      <InfoCollapse buttonText="Translation">
                          <p>My success is not but through Allah. Upon him I have relied, and to Him I return.</p>
                      </InfoCollapse>
                      </div>
            </div>
       
    </>
  )
}

export default SuccessDua
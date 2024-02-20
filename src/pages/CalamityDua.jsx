import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const CalamityDua = () => {
  return (
    <>
      <h2 style={{color:"rgb(37, 137, 225)"}}>When Afflicted by Calamity</h2>
      <h2>  دعاء الخروج من المصيبة  </h2>
        <div
         style={{
            minHeight:"50vh",
          }}
        className="card-dua">
            <div className="card-content-dua">
                <div className="sleep-dua">
                        <p style={{ fontSize: "17pt" }}>
                        إِنَّا لِلهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي ، وَاخْلُفْ لِي خَيْرًا مِنْهَا
                        </p>
                        <br />
                        <InfoCollapse buttonText="Transliteration">
                            <p>innaa lillaahi wa innaa ilayhi raaji‛oon, allaahumma’ jurnee fee muṣeebatee, wakhluf lee khayran minhaa</p>
                        </InfoCollapse >
                        <br />
                        <InfoCollapse buttonText="Translation">
                            <p>To Allah we belong and unto Him is our return. O Allah, recompense me for my affliction and replace it for me with something better.</p>
                        </InfoCollapse>
                        </div>
            </div>
        </div>
        
    </>
  )
}

export default CalamityDua
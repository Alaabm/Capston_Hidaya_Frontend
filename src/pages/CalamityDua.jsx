import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const CalamityDua = () => {
  return (
    <>
        <h1>Dua Before Bed</h1>
        <div className="sleep-dua">
        <p style={{ fontSize: "17pt" }}>
        إِنَّا لِلهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي ، وَاخْلُفْ لِي خَيْرًا مِنْهَا
        </p>
        <InfoCollapse buttonText="Transliteration">
            <p>innaa lillaahi wa innaa ilayhi raaji‛oon, allaahumma’ jurnee fee muṣeebatee, wakhluf lee khayran minhaa</p>
        </InfoCollapse >
        <InfoCollapse buttonText="Translation">
            <p>To Allah we belong and unto Him is our return. O Allah, recompense me for my affliction and replace it for me with something better.</p>
        </InfoCollapse>
        </div>
    </>
  )
}

export default CalamityDua
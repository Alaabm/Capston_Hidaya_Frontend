import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const SleepDua = () => {
  return (
    <>  
        <h1>Dua Before Bed</h1>
        <div className="sleep-dua">
        <p style={{ fontSize: "17pt" }}>
        بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ ، وَبِكَ أَرْفَعُهُ ، إِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا ، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ
        </p>
        <InfoCollapse buttonText="Transliteration">
            <p>Bismika Rabbī waḍaʿtu jambī, wa bika arfaʿuh, in amsakta nafsī fa-r-ḥamhā, wa in arsaltahā, fa-ḥ-faẓhā bimā taḥfaẓu bihī ʿibādaka-s-sāliḥīn.</p>
        </InfoCollapse >
        <InfoCollapse buttonText="Translation">
            <p>In Your Name my Lord, I lie down, and in Your Name, I rise. If You take my soul away then have mercy upon it, and if You return my soul then protect it with what you protect Your righteous servants with.</p>
        </InfoCollapse>
        </div>
    </>
  )
}

export default SleepDua
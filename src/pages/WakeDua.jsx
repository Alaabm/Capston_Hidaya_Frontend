import React from "react";
import InfoCollapse from "../components/InfoCollapse";

const WakeDua = () => {
    return (
    <>
    <h2 style={{color:"rgb(37, 137, 225)"}}> Dua After Waking Up</h2>
    <h2> الدعاء بعد الاستيقاظ </h2>
        <div 
        style={{
            minHeight:"40vh",
        }}
        className="card-dua">
            <div className="card-content-dua">
                <div className="wake-dua">
                        <div className="wake-one">
                            <p style={{ fontSize: "17pt" }}>
                                اَلْحَمْدُ لِلّٰهِ الَّذِيْ عَافَانِيْ فِيْ جَسَدِيْ ، وَرَدَّ
                                عَليَّ رُوْحِيْ ، وَأَذِنَ لِييْ بِذِكْرِهِ
                            </p>
                        <br />
                        <InfoCollapse buttonText="Transliteration">
                            <p>
                                Alḥamdu li-llāhi-l-ladhī ʿāfānī fī jasadī, wa radda ʿalayya rūḥī, wa adhina lī bi dhikrih.
                            </p>
                        </InfoCollapse>
                        <br />
                        <InfoCollapse buttonText="Translation">
                            <p>
                                All praise is for Allah Who granted me well-being in my body, and
                                returned my soul to me and allowed me to remember Him.
                            </p>
                        </InfoCollapse>
                        </div>
                        <div className="wake-two">
                        <p style={{ fontSize: "17pt" }}>
                            اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا
                            وَإِلَيْهِ النُّشُوْرُ
                        </p>
                        <br />
                        <InfoCollapse buttonText="Transliteration">
                            <p>
                                Alḥamdu li-llāhi-l-ladhī aḥyānā baʿda mā amātanā wa
                                ilayhi-n-nushūr.
                            </p>
                        </InfoCollapse>
                        <br />
                        <InfoCollapse buttonText="Translation">
                            <p>
                                All praise is for Allah who gave us life after having taken it
                                from us, and unto Him is the resurrection.
                            </p>
                        </InfoCollapse>
                        </div>
                    </div>
            </div>
        </div>
        
    </>
    );
};

export default WakeDua;

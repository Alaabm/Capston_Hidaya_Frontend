import React from 'react'
import InfoCollapse from "../components/InfoCollapse";

const IstikharaDua = () => {
  return (
    <>
      <h2 style={{color:"rgb(37, 137, 225)"}}> Istikhara:The Prayer of Seeking Guidance </h2>
      <h2> دعاء الاستخارة  </h2>
        <div 
              style={{
                minHeight:"50vh",
              }}
        className="card-dua">
            <div className="card-content-dua">
                <div className="istikhara-dua">
                        <p>
                        اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي
                        </p>
                        <br />
                            <InfoCollapse buttonText="Transliteration">
                            <p>
                            Allâhumma inni astakhiruka bi ilmika wa astaqdiruka biqudratika wa as’aluka min fadlikal-azimi, fa innaka taqdiru walâ aqdiru wa ta’lamu walâ a’lamu wa anta allamul ghuyubi. Allâhumma in kunta ta’lamu anna hâdhal amra khayrun li fi dini wa ma-ashi wa aqibati amri faqdir-hu li wa yassir-hu li thumma barik li fihi wa in kunta ta’lamu anna hâdhal amra sharrun li fi dini wa maâshi wa aqibati amri fasrifhu anni wasrifni anhu waqdir liyal-khayra haythu kâna thumma ardini.
                            </p>
                            </InfoCollapse>
                            <br />
                            <InfoCollapse buttonText="Translation">
                            <p>
                            O Allah, verily I seek the better [of either choice] from You, by Your knowledge, and I seek ability from You, by Your power, and I ask You from Your immense bounty. For indeed You have power, and I am powerless; You have knowledge, and I know not; You are the Knower of the unseen realms. O Allah, if You know that this matter is good for me with regard to my religion, my livelihood, and the end of my affair, then decree it for me, facilitate it for me, and grant me blessing in it. And if You know that this matter is not good for me with regard to my religion, my livelihood, and the end of my affair, then turn it away from me and me from it; and decree for me better than it, wherever it may be, and make me content with it
                            </p>
                            </InfoCollapse>
                        </div>
            </div>
        </div>
        
    </>
  )
}

export default IstikharaDua



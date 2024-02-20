import React from 'react'
import InfoCollapse from '../components/InfoCollapse'
import "../App.css"

const AnxietyDua = () => {
  return (
    <>  
    <h2 style={{color:"rgb(37, 137, 225)"}}> Dua for When Worried and Anxious</h2>
    <h2>    </h2>
    <div 
    style={{
      minHeight:"50vh",
      paddingTop: '50px',
        paddingBottom: '50px',
        margin: '20px',
      
    }}
    
    className="card-dua">
            <div className="card-content-dua">
                <div className="anxiety-dua">
                            <p style={{ fontSize: "17pt" }}>
                            اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ
                          </p>
                          <br />
                        <InfoCollapse buttonText="Transliteration">
                            <p>Allaahumma ‘innee ‘a’oothu bika minal-hammi walhazani, wal’ajzi walkasali, walbukhli waljubni, wa dhala’id-dayni wa ghalabatir-rijaal</p>
                        </InfoCollapse >
                        <br />
                        <InfoCollapse buttonText="Translation">
                            <p>Oh Allah, I seek refuge in you from grief and sadness, from weakness and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by others</p>
                        </InfoCollapse>
                      </div>
            </div>
        </div>
      
</>
  )
}

export default AnxietyDua
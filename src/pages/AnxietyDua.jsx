import React from 'react'
import InfoCollapse from '../components/InfoCollapse'

const AnxietyDua = () => {
  return (
    <>  
    <h1 style={{color:"rgb(90, 95, 295)"}}>Anxiety and Worry</h1>

    <div className="card-dua">
            <div className="card-content-dua">
                <div className="anxiety-dua">
                            <p style={{ fontSize: "17pt" }}>
                            اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ
                          </p>
                        <InfoCollapse buttonText="Transliteration">
                            <p>Allaahumma ‘innee ‘a’oothu bika minal-hammi walhazani, wal’ajzi walkasali, walbukhli waljubni, wa dhala’id-dayni wa ghalabatir-rijaal</p>
                        </InfoCollapse >
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
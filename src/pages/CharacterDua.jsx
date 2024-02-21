import React from 'react'
import InfoCollapse from '../components/InfoCollapse'

const CharacterDua = () => {
  return (
    <>
        
      <h2 style={{color:"rgb(37, 137, 225)"}}> Dua for Good Character</h2>
      <h2>   دعاء حسن الخُلق</h2>
        <div 
         style={{
          minHeight:"50vh",
        }}
        className="card-dua">
            <div className="card-content-dua">
                <div className="good-dua">
                    <p style={{fontSize:"17pt", textAlign:"center", paddingBottom:"20px"}} >
                    اللهم كما أحسنت خلقي فحسن خلقي
                    </p>
            <br />
            <InfoCollapse buttonText="Transliteration">
                <p>Allahumma kama ahsanta khulqi fahassin kholoqi.</p>
            </InfoCollapse >
            <br />
            <InfoCollapse buttonText="Translation">
                <p>O Allah! You have made my creation perfect, so make my moral characteristics also be the best</p>
            </InfoCollapse>
                </div>
            </div>
          </div>
    </>
  )
}

export default CharacterDua;

// rgb(87, 15, 255)
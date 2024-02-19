import React from 'react'
import InfoCollapse from '../components/InfoCollapse'

const CharacterDua = () => {
  return (
    <>
        
<h1 style={{color:"rgb(87, 15, 255)"}}>Good Character</h1>
        <div className="card-dua">
            <div className="card-content-dua">
                <div className="good-dua">
                    <p style={{fontSize:"17pt", textAlign:"center", paddingBottom:"20px"}} >
                    اللهم كما أحسنت خلقي فحسن خلقي
                    </p>
            <InfoCollapse buttonText="Transliteration">
                <p>Allahumma kama ahsanta khulqi fahassin kholoqi.</p>
            </InfoCollapse >
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
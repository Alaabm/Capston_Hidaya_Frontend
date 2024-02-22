import React from "react";
import { useState, useEffect, useRef } from "react";
// import "../App.jsx";
import "../styles/Gems.css";
import { GiCutDiamond } from "react-icons/gi";
import GemItem from '../components/GemItem';



const Gems = () => {
  const [gems, setGems] = useState([]);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const topicRef = useRef(null);
  const gemRef = useRef(null);
  // const [deleteToggle, setDeleteToggle] = useState(false);

//DELETE REQUEST FOR GEM COMMENT!
//User can delete comment by inputting password that is assigned to that specific comment
  const handleDeleteGem = async (g, password) => {
    console.log(g.password, password, "id", g._id);

    //make request to backend for delete request, make sure password=password
      
    if(g.password.trim() === password.trim()){

      try {
              // const response = await fetch(`http://localhost:8080/gems/${g._id}`, {

              const response = await fetch(`${BASE_URL}/gems/${g._id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        
              if (!response.ok) {
                throw new Error('Failed to delete the gem');
              }
        
              const data = await response.json();
              console.log(data); 
            } catch (error) {
              console.error(error.message); 
            }
    }else{
          console.log("password not correct")
    }

  };

//Create a post request



// http://localhost:3000/gems
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

//FETCH API
  useEffect(() => {
    const getGems = async () => {
      try {
        const response = await fetch(`${BASE_URL}/gems`);
        const data = await response.json();
        setGems(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getGems();
  }, []);

//HANDLE SUBMIT FORM
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const body = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        topic: topicRef.current.value,
        gem: gemRef.current.value,
      };
//POST REQUEST
      const response = await fetch(`${BASE_URL}/gems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

// ALERT METHOD OPTION WITH FUNCTION RESET!
const data = await response.json();
if(data)
{setGems([...gems, data])
window.alert("GEM Posted!")
reset()
}
} catch (err) {
console.log(err);
}
function reset(){
usernameRef.current.value="";
passwordRef.current.value="";
topicRef.current.value="" ;
gemRef.current.value="";
}

};


  return (
    <>
    <div className="root">



{/* GEM POSTS */}
      <form className="gem-form"

style={{
  minHeight:"50vh",
  paddingTop: '50px',
    paddingBottom: '50px',
    margin: '20px',
  
}}
      onSubmit={handleSubmit}
      >
          <div className = "username-password-input" >
                  <input
                      style={{
                        textAlign: "center" ,
                        backgroundColor: "whitesmoke",
                        color:'black'

                        }} 
                      
                      type="text" ref={usernameRef} placeholder="username" 
                  />
                  <br />
                  <input 
                      style={{ 
                        textAlign: "center",
                        backgroundColor: "whitesmoke",
                        color:'black'
                      }} 
                      
                      type="password" ref={passwordRef} placeholder="password" 
                  />
          </div>
          <br />
{/* DIV FOR TOPIC AND GEM COMMENT */}
          <div className = "topic-gem-input">
              <p style={{
                textAlign:"center",
                color:"whitesmoke",
                fontWeight:"bold",
                fontFamily:'monospace',
                paddingTop: "10px",
                paddingRight: "25px",

                }}
                >  
                  Topic</p>
                <input style={{
                  padding: "5px",
                  width:"150pt",
                  margin: "10px",
                  backgroundColor: "whitesmoke",
                  color:'black'
                }}
                
                type="text" ref={topicRef}  placeholder="Type topic here"/>
                    <br />
              <p style={{
                textAlign:"center",
                color:"whitesmoke",
                fontWeight:"bold",
                fontFamily:'monospace',
                paddingTop: "10px",
                paddingRight: "20px",
                letterSpacing:"5px",
                
                
                }}>GEM</p>
                <GiCutDiamond/>
                <textarea 
                  style={{ 
                    backgroundColor: "whitesmoke",
                    color:'black'
                  }} 
                id="gem-input-comment"  type="text" ref={gemRef}  placeholder="Type response here"/>
            </div>
            <br />
{/* DIV FOR SUBMIT BUTTON FOR GEM COMMENT */}
            <div className="create-gem">
              {/* <input  id="create-gem-button"
                type="submit" value="Create Gem" 
              /> */}
              <button className="create-gem-button" onClick={handleSubmit} >POST GEM</button>

            </div> 
      </form>

      <ul>
        {
// THIS IS WHERE WE WILL RENDER THE GEM
          gems.length ? (
            gems.map((g) => {
              return (
                //handleDeleteGem component
                <GemItem key={g._id} g={g} handleDeleteGem={handleDeleteGem}/>

              );
            })
          ) : (
            <p>No GEMS found :/</p>
          )
        }
      </ul>
      </div>
    </>
  );
};

export default Gems;

//https://render.com for link


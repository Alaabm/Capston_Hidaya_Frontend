import React from "react";
import { useState, useEffect, useRef } from "react";
// import "../App.jsx";
import "../styles/Gems.css";

const Gems = () => {
  const [gems, setGems] = useState([]);
  const usernameRef = useRef("string");
  const passwordRef = useRef(null);
  const topicRef = useRef(null);
  const gemRef = useRef(null);

  const [deleteToggle, setDeleteToggle] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");
  const handleDeleteGem = (id, password) => {
    console.log("password", password, "id", id);
  };
//http://localhost:3000/gems
const BASE_URL = "https://hidaya-backend.onrender.com"

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
  }, [deleteToggle]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const body = {
        username: usernameRef.current.valueOf,
        passwordRef: passwordRef.current.value,
        topicRef: topicRef.current.value,
        gemRef: gemRef.current.value,
      };

      const response = await fetch(`${BASE_URL}/gems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      setGems([...gems, data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div className="root">

      <h1>GEMS</h1>
{/* GEM FORM */}
{/* DIV FOR USERNAME AND PASSWORD */}
      <form className="gem-form"
      onSubmit={handleSubmit}
      >
          <div className = "username-password-input" >
                  <input
                      style={{ textAlign: "center" }} type="text" ref={usernameRef} placeholder="username" 
                  />
                  <br />
                  <input 
                      style={{ textAlign: "center" }} type="password" ref={passwordRef} placeholder="password" 
                  />
          </div>
          <br />
{/* DIV FOR TOPIC AND GEM COMMENT */}
          <div className = "topic-gem-input">
              <p>Topic</p>
                <input type="text" ref={topicRef} />
                    <br />
              <p >Gem</p>
                <input id="gem-input-comment"  type="text" ref={gemRef} />
            </div>
            <br />
{/* DIV FOR SUBMIT BUTTON FOR GEM COMMENT */}
            <div className="create-gem">
              <input id="create-gem-button"
                type="submit" value="Create Gem" 
              />
            </div> 
      </form>

      <ul>
        {
// THIS IS WHERE WE WILL RENDER THE GEM
          gems.length ? (
            gems.map((g) => {
              return (
                <div className="gem-render"
                  key={g._id}
                >
                  <div className="gem-container-content">
                    <div className="gem-render-username-password-div">
                      <p>{g.username}</p>
                      {/* <p>{g.password}</p> */}
                    </div>
                    <br />
                        <div className="gem-render-topic-gem-div">
                            <h3>{g.topic}</h3>
                            <p>{g.gem}</p>
                        </div>
                  </div>
                  <div className="gem-render-delete-div" >
                  {isDeleting ? (
                    <form className="gem-result">
                      <input
                        type="password"
                        value={password}
                        onChange={(evt) => {
                          setPassword(evt.target.value);
                        }}
                        placeholder="type password"
                      />
                      <br />
                      
                      <button
                        onClick={(evt) => {
                          evt.preventDefault();
                          handleDeleteGem(g._id,    password);
                        }}
                      >
                        Confirm Delete
                      </button>
                      <br />
                      <button
                        onClick={() => {
                          setIsDeleting(!isDeleting);
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => {
                        setIsDeleting(!isDeleting);
                      }}
                    >
                      Delete
                    </button>
                  )}
                  </div>
                </div>
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


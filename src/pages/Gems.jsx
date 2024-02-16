import React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.jsx";

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
      <h1>GEMS</h1>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <input style={{ textAlign: "center" }} type="text" ref={usernameRef} placeholder="username" />
        <br />
        <input style={{ textAlign: "center" }} type="password" ref={passwordRef} placeholder="password" />
        <br />
        <p style={{textAlign:"center", marginBottom:"0px"}}>Topic</p>
        <input type="text" ref={topicRef} />
        <br />
        <p style={{textAlign:"center", marginBottom:"0px"}} >Gem</p>
        <input  style={{height:"20%"}} type="text" ref={gemRef} />
        <br />
        <input style={{marginTop:"30px", }} type="submit" value="Create Gem" />
      </form>

      <ul>
        {
          //This is where we will render the gems
          gems.length ? (
            gems.map((g) => {
              return (
                <div
                  key={g._id}
                  style={{
                    border: "2px solid white",
                    margin: "20px",
                    padding: "20px",
                    height: "250px",
                  }}
                >
                  <h3>{g.username}</h3>
                  <p>{g.password}</p>
                  <p>{g.topic}</p>
                  <p>{g.gem}</p>
                  {isDeleting ? (
                    <form>
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
                          handleDeleteGem(g._id, password);
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
              );
            })
          ) : (
            <p>No GEMS found :/</p>
          )
        }
      </ul>
    </>
  );
};

export default Gems;

//https://render.com for link


import React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.jsx";

const Gems = () => {
  const [gems, setGems] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const usernameRef = useRef("string");
  const passwordRef = useRef(null);
  const topicRef = useRef(null);
  const gemRef = useRef(null);

  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");
  const handleDeleteGem = (id, password) => {
    console.log("password", password, "id", id);
  };

  useEffect(() => {
    const getGems = async () => {
      try {
        const response = await fetch("http://localhost:3000/gems");
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

      const response = await fetch(`http://localhost:8080/gems`, {
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
        <input type="text" ref={usernameRef} placeholder="username" />
        <br />
        <input type="password" ref={passwordRef} placeholder="password" />
        <br />
        <p style={{textAlign:"center"}}>Topic</p>
        <input type="text" ref={topicRef} />
        <br />
        <p style={{textAlign:"center"}} >Gem</p>
        <input type="text" ref={gemRef} />
        <br />
        <input type="submit" value="Create Gem" />
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
                      <button
                        onClick={(evt) => {
                          evt.preventDefault();
                          handleDeleteGem(g._id, password);
                        }}
                      >
                        Delete
                      </button>
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


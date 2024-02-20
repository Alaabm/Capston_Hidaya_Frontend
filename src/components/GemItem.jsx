import React, {useState} from "react"


const GemItem = ({g, handleDeleteGem}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [password, setPassword] = useState("");

  return (
    <>
      <div className="gem-render" key={g._id}>
        <div className="gem-container-content">
          <div className="gem-render-username-password-div">
            <p
              style={{
                color: "rgb(87, 15, 255)",
                textAlign: "left",
              }}
            >
              {g.username}
            </p>
            {/* <p>{g.password}</p> */}
          </div>
          <br />
          <div className="gem-render-topic-gem-div">
            <h3>{g.topic}</h3>
            <p>{g.gem}</p>
          </div>
        </div>
        <div className="gem-render-delete-div">
          {isDeleting ? (
            <form className="gem-result">
              <div className="boxes">
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
                    handleDeleteGem(g, password);
                  }}
                  style={{
                    backgroundColor: "lightblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Confirm Delete
                </button>
                <br />
                <button
                  onClick={() => {
                    setIsDeleting(!isDeleting);
                  }}
                  style={{
                    backgroundColor: "lightGray",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              style={{
                backgroundColor: "lightblue",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={() => {
                setIsDeleting(!isDeleting);
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GemItem;

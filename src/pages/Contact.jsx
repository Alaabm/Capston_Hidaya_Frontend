import { useState, useEffect, useRef } from "react";
import React from "react";
import "../styles/Gems.css";

const Contact = () => {
  const [email, setEmail] = useState([]);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // http://localhost:8080/emails

  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

  //FETCH API
  useEffect(() => {
    const getGems = async () => {
      try {
        const response = await fetch(`${BASE_URL}/emails`);
        const data = await response.json();
        setEmail(data);
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
        first: (firstRef.current.value),
        last: (lastRef.current.value ),
        phone: (phoneRef.current.value ),
        email: (emailRef.current.value ),
        message: (messageRef.current.value),
      };
      //POST REQUEST
      const response = await fetch(`${BASE_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      //ALERT MESSAGE
      const data = await response.json();
      if(data)
      {setEmail([...email, data])
      window.alert("Email sent")
      reset()
    }
    } catch (err) {
      console.log(err);
    }
  
      
  function reset(){
    firstRef.current.value="";
     lastRef.current.value="";
     phoneRef.current.value="" ;
     emailRef.current.value="";
    messageRef.current.value=""; 
  }

};

  // OR SECOND ALERT METHOD OPTION WITH FUNCTION RESET!

  //     const data = await response.json();
  //     if(data)
  //     {setEmail([...email, data])
  //     window.alert("Email sent")
  //      firstRef.current.value="";
  //       lastRef.current.value="";
  //        phoneRef.current.value="" ;
  //        emailRef.current.value="";
  //      messageRef.current.value="";  
  //     // reset()
  //   }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const data = await response.json();
  // setEmail([...email, data]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {/* FORM CREATION FOR USERS */}
      <form onSubmit={handleSubmit}>
        <h3
          style={{
            color: "#060119",
            wordSpacing: "1.4px",
            letterSpacing: "1px",
            paddingTop: "50px",
          }}
        >
          Reach out to the Hidaya Halaqah team with all your inquires by
          completing this form.
        </h3>

        <div
          style={{
            minHeight: "45vh",
            paddingTop: "100px",
            //   margin: '15px',
            padding: "50px",
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <input
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid whitesmoke",
                color: "black",
              }}
              type="text"
              id="first"
              ref={firstRef}
              placeholder="First Name"
            />
            <br />

            <input
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid whitesmoke",
                color: "black",
              }}
              type="text"
              id="last"
              ref={lastRef}
              placeholder="Last Name"
            />
          </div>
          <div
            style={
              {
                // paddingTop: '10px',
                // paddingBottom: '10px',
                // margin:"20px",
              }
            }
          >
            <input
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid whitesmoke",
                color: "black",
              }}
              type="text"
              is="phone"
              ref={phoneRef}
              placeholder="Phone Number"
            />
            <br />
            <input
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid whitesmoke",
                color: "black",
              }}
              type="text"
              id="email "
              ref={emailRef}
              placeholder="Email Address"
            />
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <textarea
              style={{
                width: "40%",
                height: "60px",
                overflow: "hidden",
                whiteSpace: "wrap",
                borderRadius: "2px",
                paddingBottom: "15px",
                backgroundColor: "white",
                color: "black",
              }}
              col="100"
              row="5"
              type="text"
              ref={messageRef}
              placeholder="Comment or Message"
            />
          </div>
          <button className="send-button" onClick={handleSubmit} >Send Message</button>
        </div>
      </form>
    </>
  );
};

export default Contact;

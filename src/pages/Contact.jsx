import { useState, useEffect, useRef } from "react";

import React from 'react'

const Contact = () => {
    const [contact, setContact] = useState([]);
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const body = {
            first: firstRef.current.value,
            last: lastRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,

          };
    
          const response = await fetch(`${BASE_URL}/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
    
          const data = await response.json();
    
          setContact([...contact, data]);
        }catch (err) {
          console.log(err);
        }
      };

  return (
    <>
        <form
         
        > 

<h2>Reach out to the Hidaya Halaqah team with all your inquires by completing this form.</h2>

            <div 
            
            
            style={{
                minHeight:"65vh",
                  paddingTop: '100px',
                //   margin: '15px',
                padding: '5px',
                
              }}
            >


                <div
                style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',

                }}
                >
                    <input
                    style={{
                        backgroundColor: 'whitesmoke',
                        border: '1px solid whitesmoke',
                        color:'black'
                    }}
                    type="text" ref={firstRef} placeholder="First Name"/>
                    <br />


                    <input 
                    style={{
                        backgroundColor: 'whitesmoke',
                        border: '1px solid whitesmoke',
                        color:'black'

                    }}
                    type="text" ref={lastRef} placeholder="Last Name"/>

                </div>
                <div
                style={{
                    // paddingTop: '10px',
                    // paddingBottom: '10px',
                    // margin:"20px",
                }}
                >

                    <input 
                    style={{
                        backgroundColor: 'whitesmoke',
                        border: '1px solid whitesmoke',
                        color:'black'

                    }}
                    type="text" ref={phoneRef} placeholder="Phone Number"/>
                    <br />
                    <input 
                    style={{
                        backgroundColor: 'whitesmoke',
                        border: '1px solid whitesmoke',
                        color:'black'

                    }}
                    type="text" ref={emailRef} placeholder="Email Address"/>
                </div>
                <div
                style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    

                }}
                >
                    <textarea

                    style={{
                        width:"40%",
                        height:"60px",
                        overflow:"hidden",
                        whiteSpace:"wrap",
                        borderRadius:"2px",
                        paddingBottom: '15px',
                        backgroundColor: 'white',
                        color: 'black'
                        
                    }}
                    
                    col="100" row="5" type="text" ref={messageRef} placeholder="Comment or Message" />
                </div>

            </div>
            
        </form>
    </>
  )
}

export default Contact
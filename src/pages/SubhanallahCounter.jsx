import React from 'react'
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";

const SubhanallahCounter = () => {
  return (
    <>
        <div className="dhikrCounter">
        <div>
            <div>
                <ButtonLink
                route="./alhamdulilahCounter"
                buttonLinkText="الحمد لله"
                ></ButtonLink>
            </div>
            <div>
                <ButtonLink
                route="./allahuakbarCounter"
                buttonLinkText="الله أكبر"
                ></ButtonLink>
            </div>
            <div>
                <ButtonLink
                route="./subhanallahCounter"
                buttonLinkText="سبحان الله "
                ></ButtonLink>
            </div>
        </div>
        </div>
    <p>Dhikr</p>
            <div style={{ border: "2px solid white", padding: "45px" }}>
            <h1>سبحان الله </h1>
            <Counter />
    </div>
    </>
  )
}

export default SubhanallahCounter
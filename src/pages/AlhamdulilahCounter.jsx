import React from 'react'
import Counter from "../components/Counter";
import ButtonLink from "../components/ButtonLink";

const AlhamdulilahCounter = () => {
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
            <div className="dhikr-counter" style={{ border: "2px solid white", padding: "10px" }}>
            <h1>الحمدلله</h1>
            <Counter />
            </div>
    </>
  )
}

export default AlhamdulilahCounter
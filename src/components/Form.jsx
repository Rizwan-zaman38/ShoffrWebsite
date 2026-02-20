import React, { useState } from 'react'

const Form = ({btn, imgURL}) => {

    const [active, setActive] = useState("Rides");

    return (
        <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`text-black w-full 
                    ${active === btn ? 'bg-white rounded-2xl py-3 border shadow-lg border-b-5 opacity-40 px-8 hover:shadow-xl ' : ''}`}>
            <img src={imgURL} alt="" />
            {btn}
        </button>
    )
}

export default Form
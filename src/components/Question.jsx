import React from 'react'

const Question = ({data,onClick,isOpen}) => {
    return (
        <div>
            <div className='px-2 my-4 overflow-hidden'>
            <div className='flex justify-between text-white'>
                <p>{data.question}</p>
                <a onClick={onClick}><i class={`fa-solid fa-chevron-down opacity-60 cursor-pointer ${isOpen? "rotate-180": ""}`}></i></a>
            </div>
            <p className={`text-white opacity-60 ease-in-out duration-500 ${isOpen? "max-h-96":"max-h-0"}`}>{data.answer}</p>
        </div>
        <hr className='text-white mt-7 opacity-20' />
        </div>
    )
}

export default Question
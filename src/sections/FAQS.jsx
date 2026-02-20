import React, { useState } from 'react'
import Question from '../components/Question'
import { Data } from '../constants/variable'

const FAQS = () => {
  const [showselect, setshowselect] = useState(null);
  const [categoryselect, setCategoryselect] = useState("General");

  const showAnswer = (index) => {
    if (showselect === index) {
      setshowselect(null)
    }
    else {
      setshowselect(index)
    }
  };

  const filterdata = Data.filter((item) => item.category === categoryselect);

  const Category = [
    "General",
    "Payment",
    "Booking",
    "Airport Transfer",
    "City Tour",
  ]

  return (
    <section id='FAQs'>
      <div className='py-10 bg-black border border-[#D4C5A0]'>
        <div className='w-[80%] py-10 px-3 mx-auto'>
          <div>
            <h1 className='font-Roboto text-5xl text-center max-sm:text-4xl py-2 text-[#D4C5A0]'>Frequently Asked Questions</h1>
          </div>
          <div className='flex text-white justify-start my-8 gap-3 flex-wrap'>
            {
              Category.map((cat) => (
                <button key={cat} onClick={()=>setCategoryselect(cat)} className={`flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 ${categoryselect === cat ? "bg-[#D4C5A0] text-black":""} cursor-pointer rounded-3xl`}>{cat}</button>
              ))
            }
          </div>
          <div>
            {
              filterdata.length > 0 ? (
                filterdata.map((daata, index) => {
                  return <Question key={daata.id} data={daata} onClick={() => showAnswer(index)} isOpen={showselect === index} />
                })
              ) : (
                <p className='text-white opacity-70'>No questions available for this category.</p>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQS
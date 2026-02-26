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
            <h1 className='font-Roboto text-2xl text-center sm:text-3xl md:text-4xl py-2 text-[#D4C5A0]'>Frequently Asked Questions</h1>
          </div>
          <div className='flex text-white justify-center my-8 gap-3 flex-wrap'>
            {
              Category.map((cat) => (
                <button key={cat} onClick={()=>setCategoryselect(cat)} className={`flex text-[14px] gap-3 font-Roboto border border-[#D4C5A0] px-3 sm:px-6 py-1 sm:py-2 max-sm:text-[12px] transition ease-in-out duration-500 hover:scale-110 ${categoryselect === cat ? "bg-[#D4C5A0] text-black":""} cursor-pointer rounded-3xl`}>{cat}</button>
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
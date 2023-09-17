import React from 'react'
import Navigation from '../components/navigation'
import Image from "next/image";



const page = () => {
  return (
    
    <>
    <header><Navigation /></header>
    <main>
        <div>

            <center><h1>The 20/4/10 Rule</h1></center>
        <Image
          src="/images/Papers.jpg"
          alt="Papers"
          width={100}
          height={100}
        />
        

    
    
    <div className="bg-sky-500 p-5 text-white font-normal shadow-xl rounded-md personOne w-5/3 mx-5 my-5 text-wrap">
        <label>
        20% Down Payment: Start by saving up at least 20% of the car's total cost for a down payment. This 
        not only reduces the amount you need to finance but also decreases the potential for the dealership to 
        capitalize on high-interest loans, as a larger down payment often leads to better loan terms.
        </label>
    </div>
    <div className="bg-sky-500 p-5 text-white font-normal shadow-xl rounded-md personOne w-5/3 mx-5 my-5">
        <label>
        4-Year Loan Term: Limit your car loan term to no more than 4 years (48 months). This minimizes the 
        amount of interest you'll pay over the life of the loan, making it less lucrative for the dealership 
        to push longer loan terms with higher interest rates.
        </label>
    </div>
    <div className="bg-sky-500 p-5 text-white font-normal shadow-xl rounded-md personOne w-5/3 mx-5 my-5">
        <label>
        10% or Less of Your Monthly Income: Ensure that your monthly car payment, including insurance, fuel, 
        and maintenance, doesn't exceed 10% of your monthly income. By sticking to this guideline, you safeguard 
        yourself from being enticed into unaffordable financing arrangements that may benefit the dealership more than you.
        </label>
    </div>
    <div className="bg-sky-500 p-5 text-white font-normal shadow-xl rounded-md personOne w-5/3 mx-5 my-5">
        <label>
        By following the 20/4/10 rule and staying vigilant against exploitative practices, you can make a 
        well-informed car purchase that aligns with your financial goals and secures your financial future.
         Remember that knowledge and preparation are your best defenses against the tactics some dealerships
          employ, ensuring that you drive away with both a reliable vehicle and peace of mind.
        </label>
    </div>
    
        </div>
    </main>
    </>
  )
}

export default page
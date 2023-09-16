"use client";
import React, { useState } from 'react';
import Calculate from './CalculateButton'

const InputBox = () => {
  
  const [salary, SetSalary] = useState("");   // Need salary
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blog = { salary };  // Not working need salary from InputField

    console.log(blog);
  }
  
  return (
    <div className="bg-sky-500 p-5 text-black font-normal shadow-xl rounded-md static">
      <form onSubmit={handleSubmit}>

      <div>
        <label>
            <input
            type="number"
            placeholder="Enter Yearly Salary"
            className="rounded-md p-3"
            value={salary}
            required
            onChange={(e) => SetSalary(e.target.value)}/>
            </label>
      </div>
        <Calculate />
      </form>
    </div>
  )
}

export default InputBox
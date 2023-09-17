"use client";
import React, { useState } from 'react';
import Calculate from './CalculateButton'
import styles from './InputBox.module.css'

const InputBox = () => {
  
  const [salary, SetSalary] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blog = { salary };

    console.log(blog);
  }
  
  return (
    <div className="bg-sky-500 p-5 text-black font-normal shadow-xl rounded-md inputBoxContainer">
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
"use client";
import React, { useState } from 'react';
import Calculate from './CalculateButton'

const InputBox = () => {
  
  const [salary, SetSalary] = useState("");   // Need salary
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const info = { salary };  // Makes salary into JSON blog
    setIsPending(true);

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    }).then(() => {
      console.log('new info added');
      setIsPending(false);
    })
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
        <Calculate IsPending={isPending}/>
      </form>
    </div>
  )
}

export default InputBox
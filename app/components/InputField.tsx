"use client";
import React, { useState } from 'react'

const InputField = () => {
    const [salary, SetSalary] = useState("");
  return (
    <div>
        <label>
            <input
            type="number"
            placeholder="Enter Yearly Salary"
            className="rounded-md p-3 static"
            value={salary}
            required
            onChange={(e) => SetSalary(e.target.value)}/>
            </label>
    </div>
  )
}

export default InputField
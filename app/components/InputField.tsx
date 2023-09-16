"use client";
import React, { useState } from 'react'

const InputField = () => {
    const [salary, SetSalary] = useState("");
  return (
    <div>
        <label>Yearly Salary:
            <input
            type="number"
            value={salary}
            required
            onChange={(e) => SetSalary(e.target.value)}/></label>
    </div>
  )
}

export default InputField
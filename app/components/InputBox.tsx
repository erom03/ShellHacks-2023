"use client";
import React, { useState } from 'react';
import Calculate from './CalculateButton'
import AffordAbleAmount from './Calculation';

const InputBox = () => {
  
  const [salary, SetSalary] = useState('');   // Need salary
  const [isPending, setIsPending] = useState(false);
  const [ValueEntered, setValueEntered] = useState(false);
  const [MonthlyPayment, SetMonthlyPayment] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const info = { salary };  // Makes salary into JSON blog
    setIsPending(true);

    fetch('/api/storeJSONData', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    }).then(res => {
      console.log('new info added');
      setIsPending(false);
      return res.json();
    })
    .then(data => {
      console.log(data);
      setValueEntered(true);
      SetMonthlyPayment((parseInt(salary)/12)*.1);
    })
  }

  const fetchData = async () => {
    const response = await fetch('/api/storeJSONData')
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <div className="inputBoxContainer">
      <form onSubmit={handleSubmit}>
        <label>
            <input
            type="number"
            placeholder="Enter Yearly Salary"
            className="InputBox"
            required
            value={salary}
            onChange={(e) => SetSalary(e.target.value)}/>
        </label>
        <Calculate IsPending={isPending}/>
        <AffordAbleAmount IsValueEntered={ValueEntered} MonthlyPayment={MonthlyPayment}/>

      </form>

      <button onClick={fetchData}>Fetch</button>
    </div>
  )
}

export default InputBox
"use client";
import React, { useState } from 'react';
import Calculate from './CalculateButton'
import AffordAbleAmount from './Calculation';

const InputBox = () => {
  
  const [salary, SetSalary] = useState('');   // Need salary
  const [isPending, setIsPending] = useState(false);
  const [ValueEntered, setValueEntered] = useState(false);
  const [MonthlyPayment, SetMonthlyPayment] = useState(0);

  var monthlyBudget;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const info = { salary };  // Makes salary into JSON blog
    setIsPending(true);

    monthlyBudget = Math.floor(parseInt(salary)/12*.1);
    setValueEntered(true);
    SetMonthlyPayment(monthlyBudget);
    setIsPending(false);
  }
  
  return (
    <>
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
    </div>
      {ValueEntered && <section>
        <label>Testing</label>
      </section>}
    </>
  )
}

export default InputBox
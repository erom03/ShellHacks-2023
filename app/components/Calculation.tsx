import React from "react";

interface ICalculationsProp {
    IsValueEntered: boolean;
    MonthlyPayment: number;
}

const AffordAbleAmount = ({IsValueEntered, MonthlyPayment}: ICalculationsProp) => {

    return (
        <label>
            {Math.floor(MonthlyPayment) > 173 && IsValueEntered && <label className="text-white font-light py-10">  Maximum Monthly Payment: { Math.floor(MonthlyPayment) } </label>}
            {Math.floor(MonthlyPayment) < 173 && IsValueEntered && <label>Sorry that's too low to affoard a car.</label>}
        </label>
    )
}

export default AffordAbleAmount
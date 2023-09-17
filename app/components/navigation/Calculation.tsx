import React from "react";

interface ICalculationsProp {
    IsValueEntered: boolean;
    MonthlyPayment: number;
}

const AffordAbleAmount = ({IsValueEntered, MonthlyPayment}: ICalculationsProp) => {

    return (
        <label>
            {Math.floor(MonthlyPayment) > 0 && IsValueEntered && <label>  Maximum Monthly Payment: { Math.floor(MonthlyPayment) } </label>}
        </label>
    )
}

export default AffordAbleAmount
import React from 'react'

// Don't worry about this error assumes type is any (it's bool)
interface ICalculateProps {
  IsPending: boolean;
}

const Calculate = ({IsPending}: ICalculateProps) => {
  return (
    <div>
        { !IsPending && <button type="submit" onClick={() => console.log('working')} className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md inline-block">
          Calculate</button>}
        { IsPending && <button disabled className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md inline-block">
          Loading...</button>}
    </div>
  )
}

export default Calculate
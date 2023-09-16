'use client';
import React from 'react'

const Calculate = () => {
  return (
    <div>
        <button onClick={() => console.log('working')} className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">
          Calculate
        </button>
    </div>
  )
}

export default Calculate
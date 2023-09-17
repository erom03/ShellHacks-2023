import React from 'react'

const CalculateCars = async () => {
    const res = await fetch('./json/Cars.json')
    let data = await res.json()

    data = data.map(item => {
        
    })
  return (
    <div>CalculateCars</div>
  )
}

export default CalculateCars
import React from 'react'
import Navigation from '../components/navigation'

const page = () => {
  /*return (
    <>
    <header><Navigation /></header>
    <div className='content-center'>
        <h1>Have a Questions?</h1>
    </div>
    </>
  )*/
  return (
    
    <>
    <header><Navigation /></header>

    <div className="flex items">

    <div className="w-96 h-96 bg-sky-500 px-5 py-10 mx-5 my-10 leading-10 text-white text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Project Lead
        </label>
        <div>-</div>
        <div>
        Enrique Romero
        </div>
    </div>

    <div className="w-96 h-96 bg-sky-500 px-5 py-10 mx-5 my-10 leading-10 text-white text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Backend Developer
        </label>
        <div>-</div>
        <div>
        Nick Azzi
        </div>
    </div>

    <div className="w-96 h-96 bg-sky-500 px-5 py-10 mx-5 my-10 leading-10 text-white text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Front-End Developer
        </label>
        <div>-</div>
        <div>
        Diego Angueira
        </div>
    </div>

    <div className="w-96 h-96 bg-sky-500 px-5 py-10 mx-5 my-10 leading-10 text-white text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Data Engineer/Project Manager
        </label>
        <div>-</div>
        <div>
        Daniel Roque
        </div>
    </div>

    </div>

    </>
  )
}

export default page
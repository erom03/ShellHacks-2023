import React from 'react'
import Navigation from '../components/navigation'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";



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
    

    <div className="flex items h-screen bg-gradient-to-r from-cyan-500 to-blue-500">

    <div className="w-96 h-96 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Project Lead
        </label>
        <div>-</div>
        <div>
        Enrique Romero
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/enrique-rom/" target="_blank"><AiFillLinkedin /></a>
        <a href="mailto:info@mailgo.dev" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-96 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Backend Developer
        </label>
        <div>
          <Image
          src="/images/Papers.jpg"
          alt="Papers"
          width={100}
          height={100}
        /></div>
        <div>
        Nick Azzi
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/nicolas-azzi/" target="_blank"><AiFillLinkedin /></a>
        <a href="mailto:info@mailgo.dev" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-96 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Front-End Developer
        </label>
        <div>-</div>
        <div>
        Diego Angueira
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/diegoangueira/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/bladex3000" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-96 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Data Engineer/Project Manager
        </label>
        <div>-</div>
        <div>
        Daniel Roque
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/daniel-roque-de-escobar-35182424a/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/OatmealJester" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    </div>

    </>
  )
}

export default page
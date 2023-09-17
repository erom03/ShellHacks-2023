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

    <div className="w-96 h-80 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Project Lead
        </label>
        <center>
          <Image
          src="/images/eriromToken.png"
          alt="Enrique"
          width={100}
          height={100}
        /></center>
        <div>
        Enrique Romero
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/enrique-rom/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/erom03" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-80 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Backend Developer
        </label>
       <center><div>
          <Image
          src="/images/NickAzzi.png"
          alt="Papers"
          width={100}
          height={100}
        /></div></center> 
        <div>
        Nick Azzi
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/nicolas-azzi/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/NickAA" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-80 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        
        <label>
        Front-End Developer
        </label>
        <center>
          <Image
          src="/images/diegoAngueiraTokenRed.png"
          alt="Papers"
          width={100}
          height={100}
        /></center>
        <div>
        Diego Angueira
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/diegoangueira/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/bladex3000" target="_blank"><AiFillGithub /></a>
        </div>
    </div>

    <div className="w-96 h-80 bg-white px-5 py-10 mx-5 my-10 leading-10 text-black text-center align-middle font-normal shadow-xl rounded-md person">
        <label>
        Data Engineer/Project Manager
        </label>
        <center><div>
          <Image
          src="/images/Danny.png"
          alt="Papers"
          width={100}
          height={100}
        /></div></center> 
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
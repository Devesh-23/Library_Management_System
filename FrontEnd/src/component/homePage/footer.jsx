import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='bg-black h-60 mt-24'>
      <div className='flex justify-center pt-36 gap-12'>
        <Link to='https://github.com/Devesh-23/Library_Management_System'>
          <FaGithub size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
        <Link to='http://www.linkedin.com/in/deveshpachauri'>
          <FaLinkedin size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
        <Link to=''>
          <AiOutlineMail size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
      </div>

    </div>
  )
}

export default Footer
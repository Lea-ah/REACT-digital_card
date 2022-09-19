import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";



export default function footer() {
  return (
    <div className="footer">
      <ul>
        <li className='__footer-icons'><FaGithubSquare color="918E9B" size="40px" /></li>
        <li className='__footer-icons'><FaLinkedin color="918E9B" size="40px" /></li>
      </ul>
    </div>
  )
}


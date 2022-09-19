
// Photo, name, buttons
import React from 'react';
import foto from '../June-2022_laugh.jpg';


export default function info() {
  return (
    <div className="info">
      <img src={foto} alt="Profile" width={317} height={317} />
      <h1>Lea Moesch</h1>
      <p>Frontend Developer</p>
      <a href="http://lea-ah.com/" target="_blank" rel="noopener noreferrer">lea-ah.com</a>
      <div className='info__btns'>
        <button className='info__btn-email'>Email</button>
        <button className='info__btn-linkedin'>Linkedin</button>
      </div>
    </div>
  )
}
 
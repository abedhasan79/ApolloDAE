import React, { useState } from 'react'
import '../../Modal.css'

export function Contact () {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal}>Contact</button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h1 className="headers1">Contact Us</h1>
            <p className="headers2">Questions or Concerns? We operate from Mon-Sun 8am-4pm</p>
            <h1 className="email1">Email us:</h1>
            <p className="names">abedhasan79@gmail.com </p>
            <p className="names">Diana.vu@hotmail.com</p>
            <p className="names">alabduljabaresra0@gmail.com</p>
            <h1 className="linkedIn">LinkedIn</h1>
            <p className="linkuser">
              <a href='https://www.linkedin.com/in/abed-hasan-965497222/'>
                Abed Hasan
              </a>
            </p>
            <p className = 'linkuser'
>
              <a href='https://www.linkedin.com/in/dianavuu/'>Diana Vu</a>
            </p>
            <p className="linkuser">
              <a href='https://www.linkedin.com/in/esra-software-dev/'>
                Esra Al-Abduljabar
              </a>
            </p>
            <button className='close-modal' onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

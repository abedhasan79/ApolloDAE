import React, { useState } from 'react'
import '../../Modal.css'

export function Privacy () {
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
      <button onClick={toggleModal}>Privacy</button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h1 style={{color: "black", fontWeight: 'bolder', fontSize: "20px"}}>Privacy Policy</h1>
            <p style={{color: "black"}}>
              for ApolloDAE At ApolloDAE, accessible from
              apollodae-heroku.com, one of our main priorities is the privacy of
              our visitors. This Privacy Policy document contains types of
              information that is collected and recorded by ApolloDAE and how we
              use it. If you have additional questions or require more
              information about our Privacy Policy, do not hesitate to contact
              us. This Privacy Policy applies only to our online activities and
              is valid for visitors to our website with regards to the
              information that they shared and/or collect in ApolloDAE. This
              policy is not applicable to any information collected offline or
              via channels other than this website. Our Privacy Policy was
              created with the help of the Free Privacy Policy Generator.
              Consent By using our website, you hereby consent to our Privacy
              Policy and agree to its terms. Information we collect The personal
              information that you are asked to provide, and the reasons why you
              are asked to provide it, will be made clear to you at the point we
              ask you to provide your personal information. If you contact us
              directly, we may receive additional information about you such as
              your name, email address, phone number, the contents of the
              message and/or attachments you may send us, and any other
              information you may choose to provide. When you register for an
              Account, we may ask for your contact information, including items
              such as name, company name, address, email address, and telephone
              number. 
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

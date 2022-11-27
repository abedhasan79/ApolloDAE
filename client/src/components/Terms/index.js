import React, { useState } from 'react'
import '../../Modal.css'

export function Terms () {
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
      <button onClick={toggleModal}>Terms & Conditions</button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h1
              style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px' }}
            >
              Terms & Conditions
            </h1>
            <p style={{color: "black"}}>
              Welcome to ApolloDAE! These terms and conditions outline the rules
              and regulations for the use of ApolloDAE's Website, located at
              apollodae-heroku.com. By accessing this website we assume you
              accept these terms and conditions. Do not continue to use
              ApolloDAE if you do not agree to take all of the terms and
              conditions stated on this page. The following terminology applies
              to these Terms and Conditions, Privacy Statement and Disclaimer
              Notice and all Agreements: "Client", "You" and "Your" refers to
              you, the person log on this website and compliant to the Company’s
              terms and conditions. "The Company", "Ourselves", "We", "Our" and
              "Us", refers to our Company. "Party", "Parties", or "Us", refers
              to both the Client and ourselves. All terms refer to the offer,
              acceptance and consideration of payment necessary to undertake the
              process of our assistance to the Client in the most appropriate
              manner for the express purpose of meeting the Client’s needs in
              respect of provision of the Company’s stated services, in
              accordance with and subject to, prevailing law of Netherlands. Any
              use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as
              interchangeable and therefore as referring to same.
            </p>
            <h1
              style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px' }}
            >
              Cookies
            </h1>
            <p style={{color: "black"}}>
              We employ the use of cookies. By accessing ApolloDAE, you agreed
              to use cookies in agreement with the ApolloDAE's Privacy Policy.
              Most interactive websites use cookies to let us retrieve the
              user’s details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
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

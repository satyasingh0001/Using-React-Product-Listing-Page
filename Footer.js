import React from 'react'
import "./Footer.css"

const Footer = () => {
  // let footerStyle = {
  //     position: "absolute",
  //     bottom: "100vh",
  //     width: "100%"
  //   }
  return ( 
    <div className='footer'>
    <footer className="bg-dark text-light py-3" >
        <p className='text-center'>Copyright &copy; SatyaSingh</p>
        <a className="nav-link text-centre" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">Contact us: satyasingh7435@gmail.com</a>
    </footer>
    </div> 
  )
}

export default Footer

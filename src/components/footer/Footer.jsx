import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Harshal</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>


            <div className="footer__social">
                <a href="https://www.github.com/krisskrosscode" className="home__social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="uil uil-github"></i>
                </a>

                <a href="https://linkedin.com/in/harshalparteke" className="home__social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="https://www.instagram.com" className="home__social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

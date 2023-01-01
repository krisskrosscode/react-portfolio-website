import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <div className="contact__content">

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>   
                        <span className="contact__card-data">harshalparteke@gmail.com</span>
                        
                        <a href="mailto:harshalparteke@gmail.com" target='_blank' rel='noopener noreferrer' className="contact__button">
                
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>   
                        <span className="contact__card-data">+91 9162841833</span>
                        
                        <a href="https://wa.me/+919162841833" target='_blank' rel='noopener noreferrer' className="contact__button">
                
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

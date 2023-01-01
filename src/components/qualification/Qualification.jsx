import React from 'react'
import './qualification.css'
const Qualification = () => {
  return (
    <section className="section qualification">
        <h2 className="section__title">Qualification</h2>
        <span className='section__subtitle'>My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                <span className="qualification__subtitle">Indian Institute of Technology (ISM), Dhanbad</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2016 - 2020
                                </div>
                            </h3>
                            <div className="qualification__degree">
                                B.Tech, Computer Science and Engineering
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                <span className="qualification__subtitle">Macro Vision Academy, Burhanpur</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2016
                                </div>
                            </h3>
                            <div className="qualification__degree">
                                Class 12th
                            </div>
                        </div>
                        
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                <span className="qualification__subtitle">St.Xavier's High School, Gondia</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  2014
                                </div>
                            </h3>
                            <div className="qualification__degree">
                                Class 10th
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification

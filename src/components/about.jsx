import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-about' data-section='about'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='row row-bottom-padded-sm animated box' data-animate-effect='fadeInLeft'>
                                    <div className='col-md-12'>
                                        <div className='about-desc'>
                                            <span className='heading-meta'>About</span>
                                            <h2 className='colorlib-heading'>Who Am I?</h2>
                                            <p>I have a Bachelor of Computer and Information Sceiences Degree Majoring in Software Development and IT Service Science from
                                                Auckland University of Technology.
                                                My passion for IT began through gaming, as I wanted the best computer and the best parts so I could play games at
                                                optimal level. It then transferred into
                                                website creation, building and learning about computers and programming languages (HTML, CSS).
                                            </p>
                                            <p>I am a hard-worker, reliable, quick learner and always wanting to learn more about the growing IT industry.
                                                Love working in teams, reliable team member and I am always focused on the task ahead. I respect my team members and
                                                I am use to working within deadlines. </p>
                                            <p>I have recently dipped my toes into the REACT world and learnt about the React.js library and how useful it can be.
                                                This portfolio was created through React.js and is only just the beginning. I am very excited to keep making improvements
                                                and expand my programming knowledge.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='colorlib-about'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 col-md-pull-3 animated-box' data-animate-effect='fadeInLeft'>
                                <span className='heading-meta'>Experiences</span>
                                <h2 className='colorlib-heading'>Here are some of my experiences</h2>
                            </div>
                        </div>
                        <div className='row row-pt-md'>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-1'>
                                    <span className='icon'>
                                        <i className='icon-bulb'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Web Development</h3>
                                        <p>CSS, HTML</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-2'>
                                    <span className='icon'>
                                        <i className='icon-social-linkedin'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Hybrid Methodologies</h3>
                                        <p>Agile, SDLC, Group work</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-1'>
                                    <span className='icon'>
                                        <i className='icon-bulb'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Portfolio</h3>
                                        <p>REACT, JavaL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row row-pt-md'>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-1'>
                                    <span className='icon'>
                                        <i className='icon-bulb'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Web Development</h3>
                                        <p>CSS, HTML</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-1'>
                                    <span className='icon'>
                                        <i className='icon-bulb'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Hybrid Methodologies</h3>
                                        <p>Agile, SDLC, Group work</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 text-center animated-box'>
                                <div className='services color-1'>
                                    <span className='icon'>
                                        <i className='icon-bulb'/>
                                    </span>
                                    <div className='desc'>
                                        <h3>Portfolio</h3>
                                        <p>REACT, JavaL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
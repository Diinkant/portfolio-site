import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-skills' data-section='skills'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 col-md-pull-3 animated box' data-animated-effect='fadeInLeft'>
                                <span className='heading-meta'>My Specialty</span>
                                <h2 className='colorlib-heading animated-box'>My Skills</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 animated-box' data-animated-effect='fadeInLeft'>
                                <p>Information about skills</p>
                            </div>
                            <div className='col-md-6 animated-box' data-animated-effect='fadeInLeft'>
                                <div className='progress-wrap'>
                                    <h3>HTML5</h3>
                                    <div className='progress'>
                                        <div className='progress-bar color-1' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style={{ width:`75%` }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 animated-box' data-animated-effect='fadeInRight'>
                                <div className='progress-wrap'>
                                    <h3>CSS</h3>
                                    <div className='progress'>
                                        <div className='progress-bar color-2' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style={{ width:`80%` }}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 animated-box animated-box' data-animated-effect='fadeInLeft'>
                                <div className='progress-wrap'>
                                    <h3>Microsoft Programs</h3>
                                    <div className='progress'>
                                        <div className='progress-bar color-3' role='progressbar' aria-valuenow='85' aria-valuemin='0' aria-valuemax='100' style={{ width:`85%` }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 animated-box' data-animated-effect='fadeInRight'>
                                <div className='progress-wrap'>
                                    <h3>SQL</h3>
                                    <div className='progress'>
                                        <div className='progress-bar color-4' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style={{ width:`50%` }}>
                                            <span>50%</span>
                                        </div>
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
import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-education' data-section='education'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 col-md-pull-3 animated-box' data-animated-effect='fadeInLeft'>
                                <span className='heading-meta'>Education</span>
                                <h2 className='colorlib-heading animate-box'>Education</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 animated-box' data-animated-effect='fadeInLeft'>
                                <div className='fancy-collapse-panel'>
                                    <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                                        <div className='panel panel-default'>
                                            <div className='panel-heading' role='tab' id='headingOne'>
                                                <h4 className='panel-title'>
                                                    <a data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>Bachelor Degree in Computer and Information Sciences</a>
                                                </h4>
                                            </div>
                                            <div id='collapseOne' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'>
                                                <div className='panel-body'>
                                                    {/*nesting 2 columns within a row so the columns are together */}
                                                    <div className='row'>
                                                        {/*col-md-6 is columns, a column always adds up too 12 */}
                                                        <div className='col-md-6'>
                                                            <p><strong>Auckland University of Technology</strong></p>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p>Major in Software Development and IT Service Science</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='panel panel-default'>
                                            <div className='panel-heading' role='tab' id='headingTwo'>
                                                <h4 className='panel-title'>
                                                    <a classname='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>High School Secondary Education</a>
                                                </h4>
                                            </div>
                                            <div id='collapseTwo' className='panel-collapse collapse in' tab='tabpanel' aria-labelledby='headingTwo'>
                                                <div className='panel-body'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <p><strong>Botany Downs Secondary College</strong></p>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <ul>
                                                                <li>NCEA Level 1 with Excellence</li>
                                                                <li>NCEA Level 2 with Merit</li>
                                                                <li>NCEA level 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

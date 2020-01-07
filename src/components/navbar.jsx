 import React, { Component } from 'react'

 export default class navbar extends Component {
     render() {
         return (
             <div>
                 <div>
                     <nav href='#navbar' className='js-colorlib-nav-toggle colorlib-nav-toggle' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'><i /></nav>
                     <aside id='colorlib-aside' className='border js-fullheight'>
                         <div className='text-center'>
                             <div className='author-img' style={{backgroundImage: 'url(images/about1.jpg)'}}/>
                             <h1 id='colorlib-logo'><a href='index.html'>Diinkant Ravichandran</a></h1>
                             <span className='email'> <i className='icon-mail'></i>Diinkant220@gmail.com</span>
                         </div>
                         <nav id='colorlib-main-menu' role='navigation' className='navbar'>
                             <div id='navbar' className='collpase'>
                                 <ul>
                                     <li className='active'><a href='#home' data-nav-section='home'>Home</a></li>
                                     <li><a href='#about' data-nav-section='about'>About</a></li>
                                     <li><a href='#skills' data-nav-section='skills'>Skills</a></li>
                                     <li><a href='#education' data-nav-section='education'>Education</a></li>
                                 </ul>
                             </div>
                         </nav>
                         <nav id='colorlib-main-menu'>
                             <ul>
                                 <div className='row'>
                                    <div className='col-md-3'><a href='https://www.linkedin.com/in/diinkant-ravichandran-4a6b83187/' target='_blank' rel='noopener noreferrer'><i className='icon-linkedin22' /></a>
                                    </div>
                                    <div className='col-md-3'><a href='https://github.com/Diinkant?tab=repositories' target='_blank' rel='noopener noreferrer'><i className='icon-github'/></a>
                                    </div>
                                    <div className='col-md-3'><i className='icon-instagram'/></div>
                                    <div className='col-md-3'><i className='icon-facebook2'/></div>
                                 </div>

                             </ul>
                         </nav>
                         <div className='colorlib-footer'>
                            <div className='text-center'>
                                <br></br><p><small>&copy; Copyright All rights reserved</small></p>
                            </div>
                         </div>
                     </aside>
                 </div>
             </div>
         )
     }
 }

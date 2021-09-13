import React from 'react'
import { Link } from 'react-router-dom'

function AboutText() {

    return (
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">We're a bunch of design <br /> passionate folks.</h2>
                        <Link to='/'>View projects →</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">We've met on a voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione et voluptatem sequi ut enim ad minima veniam, quis nostrum exercitationem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>15 Years of Experience</li>
                            <li>22 Completed Projects</li>
                            <li>114 Happy Customers</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>The BOSi team consists of over 300 employees</li>
                            <li> Our global business is mainly focused into 2 areas ↓ </li>
                            <li>Art training institute and art outsourcing services</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default AboutText
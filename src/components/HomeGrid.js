import React from 'react'
import { Link } from 'react-router-dom'


function HomeGrid() {


    return (
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">We've met on a voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione et voluptatem sequi ut enim ad minima veniam, quis nostrum exercitationem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">Our Mission <br />Our Values <br /> Our Motto </h2>
                        <Link to='/About'>Know More →</Link>
                    </div>






                </div>
            </div>
        </section>
    )

}




export default HomeGrid
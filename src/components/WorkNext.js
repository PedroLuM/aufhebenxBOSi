import React from 'react'
import { Link } from 'react-router-dom'

function WorkNext(props) {

    return (
        <section id="projectNext" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 project-nav">
                        {props.noMore === 'done' ?
                            <h1 className="big-title next-grey">
                                Last project
                            </h1>
                            :
                            <h1 className="big-title">
                                <Link to={`works-${props.link}`}>
                                    LOAD MORE STUFF ╋
                                </Link>
                            </h1>
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default WorkNext
import React from 'react'
import { Link } from "react-router-dom";


function Btn() {
    return (
        <Link to='/contact' >
            <button class="btn btn-primary btn-round btn-marquee ">
                <span data-text="GET STARTED">GET STARTED</span>
            </button>
        </Link >
    )
};

export default Btn;
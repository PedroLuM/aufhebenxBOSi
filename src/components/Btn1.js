import React from 'react'
import { Link } from "react-router-dom";



function Btn1() {
    return (
        <Link to='/Portfolio'>
            <button class="btn btn-primary btn-ghost btn-flip-down" >
                SEE LATEST
                <div class="front">SEE LATEST</div>
                <div class="back">SEE LATEST</div>
            </button>
        </Link>


    )
};

export default Btn1
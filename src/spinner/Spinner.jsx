/* eslint-disable no-unused-vars */
import React from 'react'
import './Spinner.css'

const Spinner=()=>{
    return(
        <div className="flex justify-center ">
            <div className="loader mt-40"></div>
            <p className="text-bgDark text-lg font-semibold"></p>
        </div>
    )
}

export default Spinner;

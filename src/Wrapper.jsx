import React from 'react'
import Wrapper_app from './Wrapper.css'
import Header__content from './Header__content.jsx'

const Wrapper = () => {
    return(
        <div className = "Wrapper">
            <div className="header__top">
                <Header__content />
            </div>
            <div className="ls"></div>
            <div className="content"></div>
        </div>
    )
}

export default Wrapper;
import React from 'react'

export default function Footer(props) {
    const { handleShowModal } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>RACCOOON</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick={() => {handleShowModal()}}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

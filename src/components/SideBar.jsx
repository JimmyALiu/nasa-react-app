import React from 'react'

export default function SideBar(props) {
    const { handleShowModal } = props

    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>Vite Logo lol</h2>
                <div>
                    <p>Description</p>
                    <p>info info info</p>
                </div>

                <button onClick={() => {handleShowModal()}}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}

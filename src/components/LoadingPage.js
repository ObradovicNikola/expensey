import React from 'react'
import './styles/LoadingPage.css'

export default function LoadingPage() {
    return (
        <div className="loader-container">
            <img className="loader-image" src={`${process.env.PUBLIC_URL}/loader.gif`} alt="loading" />
        </div>
    )
}

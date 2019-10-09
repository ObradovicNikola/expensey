import React from 'react'
import './styles/LoadingPage.css'

export default function LoadingPage() {
    return (
        <div className="loader-container">
            <img className="loader-image" src="/loader.gif" alt="loading" />
        </div>
    )
}

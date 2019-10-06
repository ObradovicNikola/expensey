import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

export default function Header() {
    const dispatch = useDispatch()

    return (
        <div className="header-container">
            <nav>
                <Link style={{ 'textDecoration': 'none' }} to="/dashboard">
                    <h1 >Expensey</h1>
                </Link>
                <button onClick={() => dispatch(startLogout())}>Logout</button>
            </nav>
        </div >
    )
}

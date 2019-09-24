import React from 'react'
import './styles/Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>Expensey</h1>
            <nav>
                <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </nav>
        </div>
    )
}

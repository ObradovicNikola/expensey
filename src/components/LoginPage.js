import React from 'react'
import { startLogin } from '../actions/auth'
import { useDispatch } from 'react-redux'
import './styles/LoginPage.css'


export default function LoginPage() {
    const dispatch = useDispatch()

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Expensey</h1>
                <p>It's time to get your expenses under control!</p>
                <button onClick={() => dispatch(startLogin())}>Login with Google</button>
            </div>
        </div>
    )
}

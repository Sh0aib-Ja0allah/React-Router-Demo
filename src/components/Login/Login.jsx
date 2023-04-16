import { useNavigate, useLocation } from "react-router-dom"
import { useAuthentication } from "../Authentication/Authentication"
import "./Login.css"

import {useState} from 'react'

export const Login = () => {

    const [user, setUser] = useState('')
    const auth = useAuthentication()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || "/" // if it's false redirect to the home ...

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }

  return (
    <div className="LoginPage">
        <label htmlFor="">
            UserName : <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>
            Login
        </button>
    </div>
  )
}

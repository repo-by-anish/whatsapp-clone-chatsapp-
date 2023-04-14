import axios from 'axios';
import React, { useState } from 'react'


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSetusername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    const handleSetPassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            window.alert("Enter valid input .");
        } else {
            const loginDetail = {
                username: username,
                password: password
            }
            axios.post("http://localhost:8080/chatsapp/login",loginDetail).then(response=>{
                console.log("Success");
                console.log(response.data);
            }).catch((err)=>{
                console.log(err);
            })
        }

    }

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit} className='auth-inner'>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>username address</label>
                    <input
                        onChange={handleSetusername}
                        name="username"
                        value={username}
                        type="username"
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        onChange={handleSetPassword}
                        type="password"
                        name='password'
                        value={password}
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p> */}
            </form>
        </div>

    )
}

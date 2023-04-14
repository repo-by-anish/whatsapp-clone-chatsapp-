import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {


    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSetFname = (e) => {
        const value = e.target.value;
        setFname(value);
    }
    const handleSetLname = (e) => {
        const value = e.target.value;
        setLname(value);
    }
    const handleSetEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    const handleSetPassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
    const handleSetUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fName || !lName || !email || !username || !password) {
            window.alert("Enter valid details.")
        } else {


            const user = {
                first_name: fName,
                last_name: lName,
                email: email,
                username: username,
                password: password
            }
            axios.post("http://localhost:8080/chatsapp/register", user).then(Response => {
                console.log(Response)
                alert("Sent");
            }).catch((err) => {
                if (err) {
                    console.log("ran with error");
                }
            })
        }

        // console.log(user);
    }

    return (
        <div className='register-page'>

            <form onSubmit={handleSubmit} autoComplete="off" className='auth-inner navbar-light auth-wrapper '>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        onChange={handleSetFname}
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input onChange={handleSetLname} type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        onChange={handleSetEmail}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>User name</label>
                    <input
                        onChange={handleSetUsername}
                        type="text"
                        className="form-control"
                        placeholder="User name"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        onChange={handleSetPassword}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>

        </div>
    )
}

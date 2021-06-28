import React, { Component } from 'react'
import axios from "axios"
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { GiToken } from 'react-icons/gi'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            success: '',
            errormsg: '',
            token: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const loggingIn = {
                "email": this.state.email,
                "password": this.state.password
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(loggingIn)
            const res = await axios.post('http://localhost:5000/api/auth', body, config)

            console.log('Login success', res)

            const token = res.data.token

            this.setState({
                success: 'success',
                token: token
            })

            // this.props.history.push("/");

        } catch(error) {
            this.setState({
                success: 'failure',
                errormsg: "Token not issued"
            })
            console.log("Login failure, check password", error)
        }
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            success: '',
            errormsg: ''
        })
    }


    render() {
        return (
            <div className="login-form">

                <h1 style={{textAlign: 'center'}} > WELCOME </h1>

                <p>Token issued with a successful login.</p>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <FaLock />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <GiToken />
                        <input
                            type="text"
                            name="text"
                            placeholder="Token"
                            value={this.state.token}
                            readOnly={true}
                        />
                    </div>

                    <div className="btn-wrapper">
                        <button className={this.state.success}>
                            Login
                        </button>
                    </div>

                    <p id="errormsg">{this.state.errormsg}</p>

                </form>

            </div>
        )
    }
}
import React from "react"
import "./LoginRegister.css"
import { connect } from "react-redux"
import * as Actions from "../../actions/index"

class LoginRegister extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            lassName: "",
            firsName: "",
            address: "",
            password: "",
            
        }
    }

    handleLogin = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginSubmit = (e) => {
        e.preventDefault();
        let user = null
        user ={
            email: this.state.email,
            password: this.state.password
        }
        this.props.userPostFetch(user);
    }


    handleRegisterChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleRegisterSubmit = e =>{
        e.preventDefault()
        let user ={
            email: this.state.email,
            lassName: this.state.lassName,
            firsName: this.state.firsName,
            address: this.state.address,
            password: this.state.password
        }
        this.props.userPostUserFecth(user)
    }

    register() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "114px";
    }

    login() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }

    render() {
        return (
            <div className="hero">
                <div className="from-box">
                    <div className="button-box">
                        <div id="btn"></div>
                        <button type="button" className="toggle-btn" onClick={this.login}>Log In</button>
                        <button type="button" className="toggle-btn" onClick={this.register}>Register</button>
                    </div>
                    <div className="social-icons">
                        <img src="/images/logo_login/fb.png" alt="facebook" />
                        <img src="/images/logo_login/tw.png" alt="tw" />
                        <img src="/images/logo_login/gp.png" alt="gp" />
                    </div>
                    <form id="login" onSubmit={this.loginSubmit} className="input-group">
                        <input
                            onChange={this.handleLogin}
                            value={this.state.email} name="email"
                            type="text" className="input-field"
                            placeholder="User Id" required />
                        <input
                            onChange={this.handleLogin}
                            value={this.state.password} name="password"
                            type="text" className="input-field" placeholder="Enter Password" required />
                        <button type="submit" className="submit-btn">Log in</button>
                    </form>
                    <form id="register" className="input-group" onSubmit={this.handleRegisterSubmit}>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Nhập vào email của bạn"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleRegisterChange}
                            required />
                            <input
                            type="text"
                            className="input-field"
                            placeholder="Nhập vào họ của bạn"
                            name="lassName"
                            value={this.state.lassName}
                            onChange={this.handleRegisterChange}
                            required />
                            <input
                            type="text"
                            className="input-field"
                            placeholder="Nhập vào tên của bạn"
                            name="firsName"
                            value={this.state.firsName}
                            onChange={this.handleRegisterChange}
                            required />
                            <input
                            type="text"
                            className="input-field"
                            placeholder="Nhập vào địa chỉ của bạn"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleRegisterChange}
                            required />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="************"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleRegisterChange}
                            required />
                        {/* <input
                            type="password"
                            className="input-field"
                            placeholder="************"
                            name="retypePassword"
                            value={this.state.retypePassword}
                            onChange={this.handleRegisterChange}
                            required /> */}
                        <input type="checkbox" className="check-box" /><span>I agree to the terms & conditions</span>
                        <button type="submit" className="submit-btn">Register</button>
                    </form>
                </div>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => ({
    userPostUserFecth: userInfo => dispatch(Actions.userPostUserFecth(userInfo))
})

export default connect(null, mapDispatchToProps)(LoginRegister);
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import AuthenticateUser from './AuthenticateUser.js'
import AuthenticateService from '../actions/AuthenticateService.js';
import GetActions from '../actions/GetActions';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        loginSuccess: false,
        invalidCredentials: false,
        invalidJwtToken: false
    }

    getAllTodos = () => {
        GetActions.getAllTodos()
            .then(response => { console.log(response) })
            .catch(error => console.log(error));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        // if (this.state.username === 'tanuj' && this.state.password === 'tanuj') {
        //     //this.props.history.push('/welcome');  
        //     AuthenticateUser.storeLoginDetails(this.state.username, this.state.password)
        //     this.getAllTodos();
        //     this.setState({
        //         loginSuccess: true
        //     })

        // }
        // else {
        //     this.setState({
        //         invalidCredentials: true
        //     })
        // }

        /**
         * For basic auth
         */
        if (this.state.username === 'tanuj' && this.state.password === 'tanuj') {
            AuthenticateService.authenticateUser(this.state.username, this.state.password)
                .then(() => {
                    AuthenticateUser.storeLoginDetails(this.state.username, this.state.password)
                    this.getAllTodos();
                    this.setState({
                        loginSuccess: true
                    })
                })
                .catch(() => {
                    this.setState({
                        invalidCredentials: true
                    })
                })
        }

        /**
         * For JWT
         */
        else if (this.state.username === 'tanuj' && this.state.password === 'dummy') {
            AuthenticateService.authenticateUserWithJWT(this.state.username, this.state.password)
                .then(response => {
                    AuthenticateUser.storeLoginDetailsForJWT(this.state.username, response.data.token)
                    this.getAllTodos();
                    this.setState({
                        loginSuccess: true
                    })
                })
                .catch(() => {
                    this.setState({
                        invalidCredentials: true
                    })
                })
        }
        else {
            this.setState({
                invalidCredentials: true
            })
        }
    }

    render() {
        return (
            <div>
                {/* Error message if the login is failed */}
                {this.state.invalidCredentials && <div>Invalid Credentials</div>}

                {/* Success message if the login is successful */}
                {this.state.loginSuccess && <div>Login Successful</div>}

                {/* Error message if the login is failed */}
                {this.state.invalidJwtToken && <div>Invalid Token</div>}

                {/* Login form */}
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input
                            placeholder='Enter username'
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Passoword</label>
                        <input
                            placeholder='Enter password'
                            name="password"
                            value={this.state.passoword}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button type='submit' onClick={this.handleLogin}>Login</Button>
                </Form>
            </div>
        )
    }
}
export default Login
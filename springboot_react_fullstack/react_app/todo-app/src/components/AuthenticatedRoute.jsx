import React from 'react';
import AuthenticateUser from './AuthenticateUser';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends React.Component {
    render() {
        if (AuthenticateUser.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticatedRoute
import React from 'react';
import AuthenticateUser from './AuthenticateUser';
import HeaderPanel from './HeaderPanel';

class WelcomeComponent extends React.Component {
    render() {
        const isUserLoggedIn = AuthenticateUser.isUserLoggedIn();

        return (
            <div>
                <HeaderPanel />
                <div>Welcome</div>
            </div>
        )
    }
}

export default WelcomeComponent;
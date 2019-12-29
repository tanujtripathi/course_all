import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import WelcomeComponent from './components/WelcomeComponent';
import Login from './components/Login';
import ErrorComponent from './components/ErrorComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';

class Root extends React.Component {

    render() {
        return (
            /**
             * Creating routes for navigation panel
             */
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <AuthenticatedRoute path="/welcome" component={WelcomeComponent} />
                <Route component={ErrorComponent} />
            </Switch>
        );
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(<Router><RootWithAuth /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

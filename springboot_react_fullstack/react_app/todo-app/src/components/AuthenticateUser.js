import AuthenticateService from "../actions/AuthenticateService";

class AuthenticateUser {

    storeLoginDetails(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        sessionStorage.setItem('authenticatedUser', username);

        AuthenticateService.setUpAxiosInterceptors(basicAuthHeader);
    }

    storeLoginDetailsForJWT(username, token) {
        let jwtToken = 'Bearer ' + token;
        sessionStorage.setItem('authenticatedUser', username);

        AuthenticateService.setUpAxiosInterceptors(jwtToken);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

}

export default new AuthenticateUser()
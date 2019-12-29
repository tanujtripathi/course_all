import GetRequestService from "../actions/AuthenticateService";

class AuthenticateUser {

    storeLoginDetails(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        sessionStorage.setItem('authenticatedUser', username);

        GetRequestService.setUpAxiosInterceptors(basicAuthHeader);
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
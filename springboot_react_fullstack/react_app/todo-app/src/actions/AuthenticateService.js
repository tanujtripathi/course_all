import axios from 'axios';
import AuthenticateUser from '../components/AuthenticateUser';

class AuthenticateService {

    // Each request will get intercept after login successful
    setUpAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            config => {
                if (AuthenticateUser.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader;
                }
                return config;
            }
        )
    }

    // Hits Backend to authenticate user 
    authenticateUser(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        const GET_URL = 'http://localhost:8080/authenticate';
        return axios.get(GET_URL, {
            headers: {
                authorization: basicAuthHeader
            }
        })
    }
}


export default new AuthenticateService();
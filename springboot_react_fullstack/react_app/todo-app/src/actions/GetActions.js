import axios from 'axios';

class GetActions {
    getAllTodos() {
        const GET_URL = 'http://localhost:8080/todos';

        // let username = 'tanuj';
        // let password = 'tanuj';
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)

        // return axios.get(GET_URL, {
        //     headers: {
        //         authorization: basicAuthHeader
        //     }
        // })

        return axios.get(GET_URL)
    }
}

export default new GetActions();
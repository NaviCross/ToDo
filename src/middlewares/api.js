import axios from 'axios'
import {START, SUCCESS, FAIL, GET, POST, DELETE} from '../constants'

export default store => next => action => {
    const {callAPI, type, method, data, ...rest}=action
    const token = localStorage['token']
    if (!callAPI) return next(action)

    next({...rest, type: type + START})

    switch (method) {
        case GET:
            axios.get(callAPI, {
                params: {
                    data: data
                },
                headers: {'Authorization': 'Bearer ' + token}
            }).then(response => {
                console.log('I AM API!!!!!', data, response)
                next({...rest, data, response, type: type + SUCCESS})
            }).catch(error => {
                next({...rest, type: type + FAIL, error})
            })
            break
        case POST:
            axios.post(callAPI, data, {headers: {'Authorization': 'Bearer ' + token}}).then(response => {
                console.log('POST---RESPONSE----', response)
                next({...rest, response, type: type + SUCCESS})
            }).catch(error => {
                next({...rest, type: type + FAIL, error})
            })
            break
        case DELETE:
            axios({
                method: 'delete',
                url: callAPI,
                params: {
                    data: data
                },
                headers: {'Authorization': 'Bearer ' + token}
            }).then(response => {
                console.log('DELETE---RESPONSE----', response)
                next({...rest, response, type: type + SUCCESS})
            }).catch(error => {
                next({...rest, type: type + FAIL, error})
            })
    }
}
import {ADD_TODO, DELETE_TODO, LOAD_ALL_TODO, GET} from '../constants'


export function addToDo(name, id) {
    return {
        type: ADD_TODO,
        payload: {
            name: name,
            id: id
        }

    }
}

export function deleteToDo(id, todoList) {

    return {
        type: DELETE_TODO,
        payload: {
            id: id,
            list: todoList
        }

    }
}

export function loadAllToDo() {
    console.log('yep')
    return {
        type: LOAD_ALL_TODO,
        callAPI: '/api/posts',
        method: GET

    }


}


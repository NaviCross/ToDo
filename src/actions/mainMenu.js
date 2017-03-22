import {ADD_TODO, DELETE_TODO, LOAD_ALL_TODO, GET, POST, DELETE, API} from '../constants'


// export function addToDo(name, id) {
//     return {
//         type: ADD_TODO,
//         payload: {
//             name: name,
//             id: id
//         }
//
//     }
// }


export function addToDo(name, id) {
    return {
        type: ADD_TODO,
        data: {
            name: name,
            id: id
        },
        callAPI: API + 'posts',
        method: POST

    }
}



// export function deleteToDo(id, todoList) {
//
//     return {
//         type: DELETE_TODO,
//         payload: {
//             id: id,
//             list: todoList
//         }
//
//     }
// }

export function deleteToDo(id, todoList) {

    return {
        type: DELETE_TODO,
        data: {
            id: id
            // list: todoList
        },
        callAPI: API + 'posts/' + id,
        method: DELETE,
        payload: {
            id: id,
            list: todoList
         }
    }
}

export function loadAllToDo() {

    return {
        type: LOAD_ALL_TODO,
        callAPI: API + 'posts',
        method: GET

    }


}


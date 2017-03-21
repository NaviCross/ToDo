import {ADD_TODO, DELETE_TODO} from '../constants'


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
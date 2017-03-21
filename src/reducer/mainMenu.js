import {ADD_TODO, DELETE_TODO} from '../constants'




export default (itemState = [], action) => {
    const {type, payload} =action

    switch (type) {
        case ADD_TODO:
            return [
                ...itemState,
                {
                    name: payload.name,
                    id: payload.id
                }

            ]

        case DELETE_TODO:
            console.log(payload.list, payload.id)
            return payload.list.filter((el) => payload.id !== el.id)


        default:
            return itemState

    }
}
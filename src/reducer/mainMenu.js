import {ADD_TODO, DELETE_TODO,  LOAD_ALL_TODO, SUCCESS} from '../constants'




export default (itemState = [], action) => {
    const {type, payload,response} =action

    switch (type) {
        case ADD_TODO + SUCCESS:
            console.log('111',payload, 'actions' , action)
            return [
                ...itemState,
                {
                    name: response.data.name,
                    id: response.data.id
                }

            ]

        case DELETE_TODO + SUCCESS:
            console.log(payload.list, 'id',response.data.id)
            return payload.list.filter((el) => payload.id !== el.id)

        case  LOAD_ALL_TODO + SUCCESS:
            console.log('575',payload, "responsereducer",response.data)
            return response.data



        default:
            return itemState

    }
}
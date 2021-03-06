import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
 import api from '../middlewares/api'


const enhancer = compose(
    applyMiddleware( api),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)


export default store


// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from '../reducer'
// import api from '../middlewares/api'
//
//
// const enhancer = compose(
//     applyMiddleware( api),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )
//
// const store = createStore(reducer, {}, enhancer)
//
//
// export default store



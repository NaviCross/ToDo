import React from 'react'
import { Provider } from 'react-redux'

import store  from './store'
import { render } from 'react-dom'
import Root from './components/Root'


    render (
            <Provider store = {store}>
                <Root />
            </Provider>, document.getElementById('container')
            )





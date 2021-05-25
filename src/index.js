import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'

import {Provider, dedupExchange, fetchExchange, createClient} from 'urql'
import {cacheExchange} from '@urql/exchange-graphcache'

import {getToken} from './token'

const cache = cacheExchange({})

const client = createClient({
    url: 'http://localhost:8000/graphql',
    fetchOptions: () => {
        const token = getToken()
        return {
            headers: {Authorization: token ? `JWT ${token}` : ''}
        }
    },
    exchanges: [dedupExchange, cache, fetchExchange],

})

ReactDOM.render(
    <BrowserRouter>
        <Provider value={client}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)


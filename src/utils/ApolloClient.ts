import {ApolloClient, from, InMemoryCache} from '@apollo/client'
import {httpLink} from './ApolloLinks'
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
})

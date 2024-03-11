import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    ApolloLink,
    HttpLink,
} from '@apollo/client';

import getConfig from 'next/config';
import { authHeader } from './auth/authHeader';


const getNodeEnv = () => {
    const { publicRuntimeConfig } = getConfig();
    const APIKEY = process.env.NEXT_PUBLIC_APIKEY || '879JKJLKLKJASFDA@AFAuiojaoas';
    // const GRAPHQLURL = process.env.NEXT_PUBLIC_GRAPHQLURL || 'https://www.rjsengineeringbz.com/graphql';
    const GRAPHQLURL = process.env.GRAPHQL_URL || 'http://localhost/graphql';
    return { APIKEY, GRAPHQLURL }
};



const env = getNodeEnv();
const httpLink = new HttpLink({ uri: env.GRAPHQLURL });

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    // const token = localStorage.getItem('auth_token');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: authHeader(),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'apikey': env.APIKEY
        },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),

    cache: new InMemoryCache({
        addTypename: false,
        typePolicies: {
            Query: {
                fields: {
                    findAllFacilities: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },

                    findAllOrgs: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },
                    findAllUsersByCompanyId: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },
                    findAllOrgsByCompanyId: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },
                    findAllUsers: {
                        merge(existing = [], incoming = []) {
                            return { ...existing, ...incoming };
                        },
                    },
                    findAsset: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },
                    findOrg: {
                        merge(existing = [], incoming) {
                            return { ...existing, ...incoming };
                        },
                    },
                },
            },
        },
    }),
});

export default client;
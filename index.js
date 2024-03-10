const {ApolloServer} = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

//this will hold the schema we are defining for the API and the queries allowed on that schema
const typeDefs = require('./schema.js')
const resolvers = require('./resolvers.js')

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

const server = new ApolloServer({typeDefs, resolvers, dataSources});
server
    .listen({port: process.env.PORT || 4000})
    .then(({url})=> {
        console.log(`GraphQL server running at: ${url}`)
    })
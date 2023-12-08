import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { SubscriptionServer } from "subscriptions-transport-ws"
import { execute, subscribe } from 'graphql'
import { pubsub } from "./src/graphQl/pubSub"
import express from "express"
import http from "http"
import typeDefs from './src/graphQl/schema.graphql'
import resolvers from './src/graphQl/resolvers'

const PORT = 4000;
const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, pubsub }),
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
})

async function startServer() {
    await server.start();
    server.applyMiddleware({app});

    SubscriptionServer.create(
        {
            schema,
            execute,
            subscribe,
        },
        {
            server: httpServer,
            path: server.graphqlPath,
        }
    );

    return new Promise<void>(resolve => {
        httpServer.listen(PORT, () => {
            console.log(`🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`);
            console.log(`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`);
            resolve();
        });
    });
}

startServer().catch(e => console.error(`An error occurred while starting the server: ${e}`));
import { startServer } from 'graphql-language-service-server';

startServer({
  method: 'node',
}).then(() => {
  console.log('GraphQL service server is running...');
});

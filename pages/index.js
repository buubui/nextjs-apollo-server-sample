import { ApolloProvider } from '@apollo/react-hooks';
import client from '../graphql/client';
import Hello from '../components/hello';

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div>Welcome to Next.js!</div>
      <Hello />
    </ApolloProvider>
  );
};

export default Home;

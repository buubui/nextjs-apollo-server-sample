import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_HELLO = gql`
  {
    hello
  }
`;
const Hello = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <h1>{data.hello}</h1>;
    }}
  </Query>
);

export default Hello;

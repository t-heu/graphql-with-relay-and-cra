import React from 'react';
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from 'react-relay'

import environment from './Environment'

type Props = {
  ggmail: string,
  ggpass: string
};

const query = graphql`
  mutation AaMutation ($ggmail: String!, $ggpass: String!) {
    register(email: $ggmail, password: $ggpass)
  }
`;

export default class Aa extends React.Component<Props> {
  render() {
    const {ggmail, ggpass} = this.props;
    
    return (
      <>
      <QueryRenderer 
        environment={environment} 
        query={query} 
        variables={{ 
          ggmail, 
          ggpass
        }}
        render={({ error, props }: any) => {
          if (error) {
            return (<h1>{error.message}</h1>)
          } else if (props) {
            return (<h1>{ props } is great!</h1>)
          }
          
          return <h1>Loading...</h1>;
        }}
      />
      </>
    )
  }
}
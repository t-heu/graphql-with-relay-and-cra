import React from 'react';
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from 'react-relay'

import environment from './Environment'

const query = graphql`
  query DashQuery {
    me {
      email
    }
  }
`;

//const data = {}

/*
class Aa extends Component<Props> {}
*/

export function Dash(props: any) {
  return (
    <p>{props.view.me.email}</p>
  )
}

export default () => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{}}
    render={({error, props}) => {
    //alert(JSON.stringify(error))
    
      if(error) {
        return <h5>{error.message}</h5>
      }

      if (!props) {
        return ( <p>Loading...</p> );
      }
      
      return (<Dash view={props} />);
    }}
  />
);
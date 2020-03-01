import React from 'react';
//import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from 'react-relay'

import environment from '../Environment'
import { DashQuery } from '../TypeQuery'

/*
class Aa extends Component<Props> {}
*/

function Dash(props: any) {
  return (
    <p>{props.query.me.email}</p>
  )
}

export default () => (
  <QueryRenderer
    environment={environment}
    query={DashQuery}
    variables={{}}
    render={({error, props}) => {
    //alert(JSON.stringify(error))

      if(error) {
        return <h5>{error.message}</h5>
      }

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return <Dash query={props} />
    }}
  />
);
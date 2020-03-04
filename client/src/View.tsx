import React from 'react';
//import {QueryRenderer} from 'react-relay';
import { graphql } from "babel-plugin-relay/macro";
import { useQuery } from 'relay-hooks';

import Dash from './Dash'

const query = graphql`
  query ViewQuery {
    me {
      ...Dash_user
    }
  }
`

//const variables = {} 

const options: any = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
}

const View = function (viewProps: any)  {
  const {props, error} = useQuery(query, {}, options)
  if (props) {
    return <Dash user={props} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <div>loading</div>;
}

export default View
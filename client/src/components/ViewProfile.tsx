import React from 'react';
//import {QueryRenderer} from 'react-relay';
import { graphql } from "babel-plugin-relay/macro";
import { useQuery } from 'relay-hooks';

import Profile from './Profile'

const query = graphql`
  query ViewProfileQuery {
    me {
      ...Profile_user
    }
  }
`

const options: any = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
}

const ViewProfile = function()  {
  const {props, error} = useQuery(query, {}, options)
  if (props) {
    //alert(JSON.stringify(props))
    return <Profile user={props} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <div>loading</div>;
}

export default ViewProfile
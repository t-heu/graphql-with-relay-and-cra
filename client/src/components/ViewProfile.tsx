import React from 'react';
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
  //alert(JSON.stringify(props))
  if (props) {
    return <Profile user={props} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <div>loading...</div>;
}

export default ViewProfile
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '../Environment'

const renderQuery = ({error, props}: any) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <div>{props.register} is great!</div>;
  }
  return <div>Loading</div>;
}
  
const Dash = (props:any) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        mutation ($emailG: String, $passwordG: String) {
          register(email: $emailG, password: $passwordG)
        }
      `}
      variables={{
        emailG: 'joa@gmail.com',
        passwordG: '1234'
      }}
      render={renderQuery}
    />
  );
}

export default Dash
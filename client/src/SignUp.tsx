import React from 'react';
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer/*, commitMutation*/ } from 'react-relay'

import environment from './Environment'

const query = graphql`
  mutation SignUpMutation ($ggmail: String!, $ggpass: String!) {
    register(email: $ggmail, password: $ggpass)
  }
`;

const data = {
  ggmail: 'dd',
  ggpass: '123'
}

/*
function markNotificationAsRead(): void {
  const variables = {
    ggmail: 'dd',
    ggpass: '123'
  }

  commitMutation(
    environment,
    {
      mutation: query,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
      },
      onError: err => {
        //alert(Object.keys(err))
      }
    }
  )
}*/

/*
type Props = {
  ggmail: string,
  ggpass: string
}

class Aa extends Component<Props> {}
*/

export function SignUp(props: any) {
  return (
    <h1>ok</h1>
  )
}

export default () => (
  <QueryRenderer 
    environment={environment} 
    query={query} 
    variables={data}
    render={({ error, props }: any) => {
      
      if(error) {
        return <h5>{error.message}</h5>
      } 
      
      if(!props) {
        return <h3>loading...</h3>
      }
        
      return <SignUp register={props} />;
    }}
  />
)
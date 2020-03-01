import React from 'react'
//import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from 'react-relay'

import environment from '../Environment'
import { SignInMutation } from '../TypeQuery'

/*
const query = graphql`
  mutation SignInMutation ($ggmail: String!, $ggpass: String!) {
    login(email: $ggmail, password: $ggpass) {
      email
      token
    }
  }
`;*/

const data = {
  ggmail: 'dd',
  ggpass: '123'
}

/*
type Props = {
  ggmail: string,
  ggpass: string
}

class Aa extends Component<Props> {}
*/

export function SignIn(props: any) {
  return (
    <p>{props.login.login.token}</p>
  )
}

export default () => (
  <QueryRenderer
    environment={environment}
    query={SignInMutation}
    variables={data}
    render={({error, props}) => {

      if(error) {
        return <h5>{error.message}</h5>
      }

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <SignIn login={props} />
      );
    }}
  />
)
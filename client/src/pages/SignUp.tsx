import React from 'react'
import { QueryRenderer } from 'react-relay'

import environment from '../Environment'
import { SignUpMutation } from '../TypeQuery'

const data = {
  ggmail: 'tt',
  ggpass: '123'
}

export function SignUp(props: any) {
  return (
    <h1>ok</h1>
  )
}

export default () => (
  <QueryRenderer
    environment={environment}
    query={SignUpMutation}
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
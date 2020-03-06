import React, { useState } from 'react';
import { graphql } from "babel-plugin-relay/macro"
import { useMutation } from 'relay-hooks'

const query = graphql`
  mutation SignInMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

function SignIn() {
  const [data, setData] = useState({})
  const [tr, setTr] = useState(false)
  const [mutate, { loading }] = useMutation(query,
      {
        onCompleted: (myMutation) => {
          setData(myMutation)
          setTr(true)
        },
      },
    );
    
  function render(data: any) {
    return (
      <p>{data.login.token}</p>
    )
  } 
   
  return (
    <>
      <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <button
          onClick={() => {
            mutate({
              variables: {
                email: 'dd', 
                password: '123' 
              },
            });
          }}
        >
          Run Mutation
        </button>
      )}
      </div>
      
      <div>
        {tr ? render(data) : 'vazio'}
      </div>
    </>
  )
}

export default SignIn

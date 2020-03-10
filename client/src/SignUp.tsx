import React, { useState } from 'react';
import { graphql } from "babel-plugin-relay/macro"
import { useMutation } from 'relay-hooks'

const query = graphql`
  mutation SignInMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      <p>{data.register}</p>
    )
  } 
   
  return (
    <>
      <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <input type="text" onChange={e => setPassword(e.target.value)} /><br />
          <button
            onClick={() => {
              mutate({
                variables: {
                  email, 
                  password
                },
              });
            }}
          >
            submit
          </button>
        </>
      )}
      </div>
      
      <div>
        {tr ? render(data) : 'vazio'}
      </div>
    </>
  )
}

export default SignUp

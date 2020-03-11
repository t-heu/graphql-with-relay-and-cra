import React, { useState } from 'react';
import { graphql } from "babel-plugin-relay/macro"
import { useMutation } from 'relay-hooks'

const query = graphql`
  mutation SignInMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      email
    }
  }
`

function SignIn() {
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
    if(data.login.token) {
      localStorage.setItem('@key', data.login.token)
    }
    return (
      <p>{data.login.email}</p>
    )
  } 
   
  return (
    <>
      <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <input type="text" onChange={e => setPassword(e.target.value)} /><br />
          <button
            onClick={() => {
              mutate({
                variables: {
                  email,//: 'dd', 
                  password//: '123' 
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

export default SignIn

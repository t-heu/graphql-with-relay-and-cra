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

interface MyModel {
  login?: { token: string }
}

function SignIn({history}: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState({})
  
  const [mutate, { loading }] = useMutation(query,
      {
        onCompleted: (myMutation: MyModel) => {
          
          if(myMutation.login) {
            localStorage.setItem('@key', myMutation.login.token)
          }
          history.push('/profile')
        },
      },
    );
   
  function handleClick(e: any) {
    e.preventDefault()
    mutate({
      variables: {
        email,
        password
      }
    });
  }
   
  return (
    <div className="log">
      { !loading ? (
        <form>
          <h2>signin</h2>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <input type="text" onChange={e => setPassword(e.target.value)} /><br />
          <button onClick={(e) => handleClick(e)}>
            submit
          </button>
        </form>
      ) : (
        <div>
          <h3>loading</h3>
        </div>
      )}
    </div>
  )
}

export default SignIn

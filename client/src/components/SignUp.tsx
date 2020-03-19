import React, { useState } from 'react';
import { graphql } from "babel-plugin-relay/macro"
import { useMutation } from 'relay-hooks'

const query = graphql`
  mutation SignUpMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const [tr, setTr] = useState(false)
  const [mutate, { loading }] = useMutation(query,
      {
        onCompleted: (myMutation) => {
          setTr(true)
        },
      },
    );
   
  return (
    <>
      <div className="log">
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <form>
          <h2>signup</h2>
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
        </form>
      )}
      </div>
      
      <div>
        {tr ? 'create successul' : ''}
      </div>
    </>
  )
}

export default SignUp

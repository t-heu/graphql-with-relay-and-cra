import React, { useState, Suspense } from 'react';
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
  const [loa, setLoa] = useState(false)
  const [mutate/*, { loading }*/] = useMutation(query,
      {
        onCompleted: (myMutation) => {
          setData(myMutation)
          setLoa(true)
        },
      },
    );
   
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      { !loa ? (
        <div>
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
       
        </div>
      ) : (
        <div>
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <Fa data={data} />
          </Suspense>
        </div>
      )}
    </Suspense>
  )
}

interface MyModel {
  data: {
  login?: { email: string }}
}

function Fa({data}: any) {
  return <p>{data.login.email}</p>;
}

export default SignIn

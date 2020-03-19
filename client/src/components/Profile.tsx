// colocation
import React from 'react';
import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from 'relay-hooks';

const fra = graphql`
  fragment Profile_user on User {
    email
    id
  }
`;

export default function Profile(props: any) {
  const user = useFragment(fra, props.user.me)
  return (
    <div>
      <p>
        seu email: {user.email}
      </p>
    </div>
  );
}

/*
type Props = {
  dash: any//Todo_todo
}*/

//class Dash extends React.Component<Props> {}

/*
export default createFragmentContainer(
  Dash,
  {
    dash: graphql`
      fragment Dash_dash on User {
        email
        id
      }
    `,
  }
)*/

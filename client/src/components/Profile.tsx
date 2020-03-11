import React from 'react';
import { graphql } from "babel-plugin-relay/macro";
//import {createFragmentContainer} from 'react-relay'
import { useFragment } from 'relay-hooks';
/*
type Props = {
  dash: any//Todo_todo
}*/

const fra = graphql`
  fragment Profile_user on User {
    email
    id
  }
`;

//class Dash extends React.Component<Props> {
export default function Profile(props: any) {
  const user = useFragment(fra, props.user.me)
  return (
    <li>
      <div>
        <label>
          {user.email}
        </label>
      </div>
    </li>
  );
}
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

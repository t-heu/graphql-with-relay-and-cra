import { graphql } from "babel-plugin-relay/macro";

export const DashQuery = graphql`
  query DashQuery {
    me {
      email
    }
  }
`;

export const SignInMutation = graphql`
  mutation SignInMutation ($ggmail: String!, $ggpass: String!) {
    login(email: $ggmail, password: $ggpass) {
      email
      token
    }
  }
`;

export const SignUpMutation = graphql`
  mutation SignUpMutation ($ggmail: String!, $ggpass: String!) {
    register(email: $ggmail, password: $ggpass)
  }
`;
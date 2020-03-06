/* tslint:disable */
/* eslint-disable */
/* @relayHash 5418e0dc0011f75f92477a51e2059735 */

import { ConcreteRequest } from "relay-runtime";
export type SignInMutationVariables = {
    email: string;
    password: string;
};
export type SignInMutationResponse = {
    readonly login: {
        readonly token: string | null;
    } | null;
};
export type SignInMutation = {
    readonly response: SignInMutationResponse;
    readonly variables: SignInMutationVariables;
};



/*
mutation SignInMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
    token
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SignInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignInMutation",
    "id": null,
    "text": "mutation SignInMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '804d10529b805f7d058d97167f3dc8e5';
export default node;

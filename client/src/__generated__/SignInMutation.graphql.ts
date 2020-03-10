/* tslint:disable */
/* eslint-disable */
/* @relayHash 20aba3087dae418bd53c1f033ca283d8 */

import { ConcreteRequest } from "relay-runtime";
export type SignInMutationVariables = {
    email: string;
    password: string;
};
export type SignInMutationResponse = {
    readonly login: {
        readonly token: string | null;
        readonly email: string;
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
    email
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
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
          (v2/*: any*/),
          (v3/*: any*/)
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
          (v3/*: any*/),
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
    "text": "mutation SignInMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9f608ab93a5fcb7f7ca64b5126a6d1a3';
export default node;

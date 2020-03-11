/* tslint:disable */
/* eslint-disable */
/* @relayHash d971c596293f9a2cb43f3aed87558b5e */

import { ConcreteRequest } from "relay-runtime";
export type SignUpMutationVariables = {
    email: string;
    password: string;
};
export type SignUpMutationResponse = {
    readonly register: boolean;
};
export type SignUpMutation = {
    readonly response: SignUpMutationResponse;
    readonly variables: SignUpMutationVariables;
};



/*
mutation SignUpMutation(
  $email: String!
  $password: String!
) {
  register(email: $email, password: $password)
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
    "kind": "ScalarField",
    "alias": null,
    "name": "register",
    "args": [
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
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $email: String!\n  $password: String!\n) {\n  register(email: $email, password: $password)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ee6513fbe66677df5c39c01cf8a2a8aa';
export default node;

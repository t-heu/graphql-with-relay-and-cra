/* tslint:disable */
/* eslint-disable */
/* @relayHash fded14c8f46248ef1ac1b87d5425f9d6 */

import { ConcreteRequest } from "relay-runtime";
export type SignUpMutationVariables = {
    ggmail: string;
    ggpass: string;
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
  $ggmail: String!
  $ggpass: String!
) {
  register(email: $ggmail, password: $ggpass)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ggmail",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "ggpass",
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
        "variableName": "ggmail"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "ggpass"
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
    "text": "mutation SignUpMutation(\n  $ggmail: String!\n  $ggpass: String!\n) {\n  register(email: $ggmail, password: $ggpass)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f392998d03b8dfc573fd32e40dcbaf03';
export default node;

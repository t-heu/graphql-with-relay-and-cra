/* tslint:disable */
/* eslint-disable */
/* @relayHash bc6dbb9c17419663df4a7aba681f98e0 */

import { ConcreteRequest } from "relay-runtime";
export type AaMutationVariables = {
    ggmail: string;
    ggpass: string;
};
export type AaMutationResponse = {
    readonly register: boolean;
};
export type AaMutation = {
    readonly response: AaMutationResponse;
    readonly variables: AaMutationVariables;
};



/*
mutation AaMutation(
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
    "name": "AaMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AaMutation",
    "id": null,
    "text": "mutation AaMutation(\n  $ggmail: String!\n  $ggpass: String!\n) {\n  register(email: $ggmail, password: $ggpass)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f522e047a5ff8c2d3c40b86911fcc9ec';
export default node;

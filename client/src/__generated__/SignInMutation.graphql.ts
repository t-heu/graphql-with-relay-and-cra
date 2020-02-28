/* tslint:disable */
/* eslint-disable */
/* @relayHash 4373ba61c3b881240a295191c8e94cab */

import { ConcreteRequest } from "relay-runtime";
export type SignInMutationVariables = {
    ggmail: string;
    ggpass: string;
};
export type SignInMutationResponse = {
    readonly login: {
        readonly email: string;
        readonly token: string | null;
    } | null;
};
export type SignInMutation = {
    readonly response: SignInMutationResponse;
    readonly variables: SignInMutationVariables;
};



/*
mutation SignInMutation(
  $ggmail: String!
  $ggpass: String!
) {
  login(email: $ggmail, password: $ggpass) {
    email
    token
    id
  }
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v3 = {
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
    "text": "mutation SignInMutation(\n  $ggmail: String!\n  $ggpass: String!\n) {\n  login(email: $ggmail, password: $ggpass) {\n    email\n    token\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '379a9de542a26e8773fa3007714d3f8e';
export default node;

/* tslint:disable */
/* eslint-disable */
/* @relayHash 25c4ffdc9fea13c82f22a731c62dd3eb */

import { ConcreteRequest } from "relay-runtime";
export type DashQueryVariables = {};
export type DashQueryResponse = {
    readonly me: {
        readonly email: string;
    } | null;
};
export type DashQuery = {
    readonly response: DashQueryResponse;
    readonly variables: DashQueryVariables;
};



/*
query DashQuery {
  me {
    email
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "DashQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    "operationKind": "query",
    "name": "DashQuery",
    "id": null,
    "text": "query DashQuery {\n  me {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'efae8fc881ed3e934e26fe8982195ed8';
export default node;

/* tslint:disable */
/* eslint-disable */
/* @relayHash f46e8649f6e5719821729faf31a3a7bd */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewQueryVariables = {};
export type ViewQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Profile_user">;
    } | null;
};
export type ViewQuery = {
    readonly response: ViewQueryResponse;
    readonly variables: ViewQueryVariables;
};



/*
query ViewQuery {
  me {
    ...Profile_user
    id
  }
}

fragment Profile_user on User {
  email
  id
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "Profile_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
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
    "name": "ViewQuery",
    "id": null,
    "text": "query ViewQuery {\n  me {\n    ...Profile_user\n    id\n  }\n}\n\nfragment Profile_user on User {\n  email\n  id\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '7d9381c9eecfb96a0d4e1d0207e18b51';
export default node;

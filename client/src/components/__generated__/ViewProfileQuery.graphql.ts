/* tslint:disable */
/* eslint-disable */
/* @relayHash b68421dd7643232dac00d1c65b2ae362 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewProfileQueryVariables = {};
export type ViewProfileQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Profile_user">;
    } | null;
};
export type ViewProfileQuery = {
    readonly response: ViewProfileQueryResponse;
    readonly variables: ViewProfileQueryVariables;
};



/*
query ViewProfileQuery {
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
    "name": "ViewProfileQuery",
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
    "name": "ViewProfileQuery",
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
    "name": "ViewProfileQuery",
    "id": null,
    "text": "query ViewProfileQuery {\n  me {\n    ...Profile_user\n    id\n  }\n}\n\nfragment Profile_user on User {\n  email\n  id\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '9182898ee848f7d77f40df10abe5016c';
export default node;

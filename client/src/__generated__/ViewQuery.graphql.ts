/* tslint:disable */
/* eslint-disable */
/* @relayHash 3ce331c9a621b2d9699972a6a25cebda */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewQueryVariables = {};
export type ViewQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Dash_user">;
    } | null;
};
export type ViewQuery = {
    readonly response: ViewQueryResponse;
    readonly variables: ViewQueryVariables;
};



/*
query ViewQuery {
  me {
    ...Dash_user
    id
  }
}

fragment Dash_user on User {
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
            "name": "Dash_user",
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
    "text": "query ViewQuery {\n  me {\n    ...Dash_user\n    id\n  }\n}\n\nfragment Dash_user on User {\n  email\n  id\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '0536f30650471dcd8f6b834671e91c29';
export default node;

/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Dash_user = {
    readonly email: string;
    readonly id: string;
    readonly " $refType": "Dash_user";
};
export type Dash_user$data = Dash_user;
export type Dash_user$key = {
    readonly " $data"?: Dash_user$data;
    readonly " $fragmentRefs": FragmentRefs<"Dash_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Dash_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = '6f724319dd5c4dbb448c068eb2ca87cf';
export default node;

/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Profile_user = {
    readonly email: string;
    readonly id: string;
    readonly " $refType": "Profile_user";
};
export type Profile_user$data = Profile_user;
export type Profile_user$key = {
    readonly " $data"?: Profile_user$data;
    readonly " $fragmentRefs": FragmentRefs<"Profile_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Profile_user",
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
(node as any).hash = '8b156a3e224c632837d5ce245e351f79';
export default node;

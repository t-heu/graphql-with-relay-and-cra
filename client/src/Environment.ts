/*import {
  Network,
  //RequestNode,
  Variables,
  CacheConfig,
  UploadableMap,
  //QueryPayload,
  RelayObservable,
  LegacyObserver,
  Disposable,
  Environment
} from 'relay-runtime';
import {
  SubscriptionClient
} from 'subscriptions-transport-ws';
const config = {
  GRAPHQL_URL: 'http://localhost:4000/graphql',
  SUBSCRIPTION_URL: `ws://localhost:4000/graphql/subscriptions`,
};
// fetch query
export type ObservableFromValue < T > = |
  RelayObservable < T >
  |
  Promise < T >
  |
  T;
export type FetchFunction = (
  //operation: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables ? : UploadableMap
) => ObservableFromValue < QueryPayload > ;
const fetchQuery = async (
  request,
  variables
) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };
  const response = await fetch(
    config.GRAPHQL_URL, {
      method: 'POST',
      headers,
      body,
    });
  return await response.json();
};
// subscription
export type SubscribeFunction = (
  //operation: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  observer: LegacyObserver < QueryPayload >
) => RelayObservable < QueryPayload > | Disposable;
const setupSubscription = (
  config,
  variables,
  cacheConfig,
  observer
) => {
  const subscriptionClient = new SubscriptionClient(
    config.SUBSCRIPTION_URL, { reconnect: true }
  );
  const onNext = (result) => {
    observer.onNext(result)
  };
  const onError = (error) => {
    observer.onError(error)
  };
  const onComplete = () => {
    observer.onCompleted()
  };
  const query = config.text;
  const client = subscriptionClient.request({ query, variables })
    .subscribe(
      onNext,
      onError,
      onComplete
    );
  return {
    dispose: () => {
      client.unsubscribe()
    }
  }
};
const network = Network.create(
  fetchQuery,
  setupSubscription,
);
export default new Environment({
  network
})*/

import { Environment, Network, RecordSource, Store } from "relay-runtime";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU4MzA0MjY1MSwiZXhwIjoxNTgzNjQ3NDUxfQ.52Ng9qXw_jhePy4WnCiHfmAKkjKlwBXcSkqWy_MSASM'

//token ? {"": `` }: null

async function fetchQuery(operation: any, variables: any) {
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        //"Authorization": `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    });
    
    const dat = await response.json()
    //alert(JSON.stringify(dat))
    if(dat.errors[0].message) {
      delete dat.data
      return dat
    }
    //alert(JSON.stringify(dat))
    
    return await response.json()
  } catch(err) {
    return err
  }
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})
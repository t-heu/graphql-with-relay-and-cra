import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchQuery(operation: any, variables: any) {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
  return await response.json();
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

/*import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(operation: any, variables: any) {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;*/
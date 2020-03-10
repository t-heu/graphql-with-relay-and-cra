import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const token = localStorage.getItem('@key')
// Define a function that fetches the results of an operation (query/mutation/etc) 
// and returns its results as a Promise:
function fetchQuery(operation: any, variables: any) {
  // eslint-disable-next-line
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      //"Authorization": `bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => response.json());
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
//const handlerProvider = null;

const environment = new Environment({
  //handlerProvider, // Can omit.
  network,
  store,
});

export default environment;
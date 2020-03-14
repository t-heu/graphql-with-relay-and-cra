import { 
  Environment, 
  Network, 
  RecordSource, 
  Store,
  //RequestNode,
  Variables } from 'relay-runtime';

const token = localStorage.getItem('@key')

function fetchQuery(operation: any,
  variables: Variables) {
  // eslint-disable-next-line
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      "Authorization": `bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  .then(response => response.json())
  .then((data) => data)
  
  //return wrapPromise(promise)
}

const source = new RecordSource();
const store = new Store(source);
let network = Network.create(fetchQuery)

//const handlerProvider = null;

const environment = new Environment({
  //handlerProvider, // Can omit.
  network,
  store,
});

export default environment;
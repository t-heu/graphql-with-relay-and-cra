import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import axios from "axios"

function fetchQuery(environment: any, query: any, variables: any): any {
  axios({
    url: 'http://localhost:4000/graphql',
    method: 'post',
    data: {
      query:`
        mutation {
          register(email: "", password: "")
        }
      `
    }
  }).then((result) => {
    alert(result.data)
    return result.data
  });
}

const store = new Store(new RecordSource());
const network = Network.create(fetchQuery)

const environment = new Environment({
  network,
  store,
});

export default environment
/*
mutation SearchUsers($term: String!, $type: SearchUsersType!) {
  register: searchUsers(term: $term, type: $type)
}

*/
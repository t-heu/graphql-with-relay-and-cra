const fetch = require("node-fetch");
const path = require("path");

const {
  buildClientSchema,
  printSchema,
  introspectionQuery
} = require("graphql");
const fs = require("fs");

async function main() {
  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: introspectionQuery })
  });
  const introspectionSchemaResult = await res.json();
  const clientSchema = buildClientSchema(introspectionSchemaResult.data);
  const sdl = printSchema(clientSchema);
  fs.writeFileSync(path.join(__dirname, "schema.graphql"), sdl);
}

main().catch(e => {
  console.error("ERROR", e);
});

/*var fetch = require('node-fetch');
var fs = require('fs');

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'query': introspectionQuery }),
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const schemaString = printSchema(buildClientSchema(res.data));
    fs.writeFileSync('data/schema.graphql', schemaString);
  });*/
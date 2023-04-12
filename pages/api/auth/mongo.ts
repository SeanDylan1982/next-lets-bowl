import mongodb from 'mongodb';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://next-lets-bowl:LL0921jjSean1!@letsbowl.doak51m.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("next-lets-bowl-db").collection("next-lets-bowl-users");
  // perform actions on the collection object
  client.close();
});
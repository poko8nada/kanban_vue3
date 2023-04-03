
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://you88451h:Os2pqfRqIjCVh3zu@cluster0.irhjgou.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected successfully to server");

  const documents = [
    { a: 1 },
    { a: 2 },
    { a: 3 }
  ];

  collection.insertMany(documents, (err, result) => {
    console.log('Inserted 3 documents into the collection');
    console.log(result);
    client.close();
  })

});

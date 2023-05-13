const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Admin:ki8Ryg1uOudjXLpP@nbc-react-cluster0.8desyva.mongodb.net/';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

async function insertDocument(document) {
  const collection = client.db('nbc-react-db').collection('nbc-react-col');
  const result = await collection.insertOne(document);
  console.log(`Inserted document with ID ${result.insertedId}`);
}

async function disconnect() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error(err);
  }
}


// ki8Ryg1uOudjXLpP
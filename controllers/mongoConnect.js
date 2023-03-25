const { MongoClient, ServerApiVersion } = require('mongodb');

// const { MONGO_DB_URI } = process.env;
const MONGO_DB_URI =
  'mongodb+srv://yjey12:didghdus220@cluster0.fwyixrv.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
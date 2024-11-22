const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoDbUrl =
  "mongodb+srv://m001-student:Xwl42LmrcXu3cYZG@sandbox.i9yi5.mongodb.net/shop?retryWrites=true&w=majority&appName=Sandbox";

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }
  MongoClient.connect(mongoDbUrl)
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};

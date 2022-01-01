const mongoose = require("mongoose");

var mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB connection failed to connect");
});

connection.on("connected", () => {
  console.log("MongoDB connection successfully connected");
});

// mongoimport --host cluster0-shard-00-02.s8pkg.mongodb.net:27017 --db mernhotel --type json
// --file E:/DevWeb/mern/rooms.json --jsonArray --authenticationDatabase admin
// --ssl --username shubham --password shubhamongo

// mongoimport --uri mongodb+srv://shubham:shubhamongo@cluster0.s8pkg.mongodb.net/mernhotel
// --collection hotels --type json --file E:/DevWeb/mern/rooms.json --jsonArray

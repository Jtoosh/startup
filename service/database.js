const {MongoClient} = require('mongodb')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json')

const dbName = 'mnemonicStudy'
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/${dbName}`
const client = new MongoClient(url);
const db = client.db('mnemonicStudy');
const userCollection = db.collection('userInfo');

//This is the method to test the connection, copied from the Simon code
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username){
  return userCollection.findOne({username: username})
}

function getUserByToken(token){
  return userCollection.findOne({token: token})  
}

async function createUser(username, password){
  //Encrypt the password first
  const passwordHash = await bcrypt.hash(password,10);

  const user ={
    username: username,
    password: passwordHash,
    token : uuid.v4(),
    decks : []
  };

  await userCollection.insertOne(user);
  return user
}

async function updateUser(user){
  await userCollection.updateOne({username: user.username}, {$set:{decks: user.decks}}) 
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  updateUser
}



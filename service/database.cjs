const {MongoClient} = require('mongodb')
const data = require('./sampleData.cjs')
const config = require('./dbConfig.json')

const dbName = 'mnemonicStudy'
const colName = 'userInfo'


const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/${dbName}`

async function main() {
  const client = new MongoClient(url);

  try{
    await client.connect()

    const result = await client.db(dbName).collection(colName).insertOne(data)

    console.log(`Inserted ${data.name} doc into ${colName}`);
  } finally {
    await client.close();
  }
} 

main()
const port = process.argv.length > 2 ? process.argv[2] : 5173;

const express = require('express');
const uuid = require('uuid');
const app = express();

//Users and their study materials are stored here in the backend unitl DB is implemented
//Each User object will be an object with username, password, and decks properties.

class User {
  constructor(username, password,token, decks){
    self.username = username;
    self.password = password;
    self.token = token
    self.decks = decks;
  }
}

//Set to store User objects
let users= {};

//JSON body parsing 
app.use(express.json());

//Serving static files
app.use(express.static('public'));

// Router for all service endpoints
let apiRouter = express.Router();
app.use('/api', apiRouter);


//Endpoint for creating a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  try {
    if (user){
    res.status(409).send({msg: 'Existing user'});
   } else {
    const user = new User( req.body.email, req.body.password, uuid.v4(), {});
    users[user.username] = user;
  
    res.json({ username:user.username})}
  }
  catch (error) {
    console.error("Error in '/auth/create':", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
});

//Endpoint for loging in an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user){
    if(req.body.password === user.password){
      user.token = uuid.v4();
      res.json({ token: user.token });
      return
    }
  }
  res.status(401).send({msg: 'Unauthorized' });
}); 

//Endpoint for logging a user out
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user){
    delete user.token;
  }
  res.status(204).end();
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});
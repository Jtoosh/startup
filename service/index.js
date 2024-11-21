const port = process.argv.length > 2 ? process.argv[2] : 5174;

import express from 'express'
import * as uuid from 'uuid';
const app = express();
import {Card} from '../shared/card.mjs';
import {Deck} from '../shared/deck.mjs'

//Users and their study materials are stored here in the backend unitl DB is implemented
//Each User object will be an object with username, password, and decks properties.

// class User {
//   constructor(self, username, password, token, decks){
//     self.username = username;
//     self.password = password;
//     self.token = token
//     self.decks = decks;
//   }
// }

//Set to store User objects
let users= {};

//JSON body parsing 
app.use(express.json());

//Serving static files
app.use(express.static('public'));

// Router for all service endpoints
let apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/healthcheck', async (req, res) => {
  res.send("Hello! I'm working!!")
})


//Endpoint for creating a new user
apiRouter.post('/auth/create', async (req, res) => {
  console.log('Create Endpoint Called!!')
  const user = users[req.body.email];
  try {
    if (user){
    res.status(409).send({msg: 'Existing user'});
   } else {
    const user = { username: req.body.email, password: req.body.password, token: uuid.v4(), decks: []};
    users[user.username] = user;    
    res.json(user);}
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
      res.json(user);
      return
    }
  }
  res.status(401).send({msg: 'Unauthorized' });
}); 

//Endpoint for logging a user out
apiRouter.post('/auth/logout', (req, res) => {

  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user){
    user.token = '';
  }
  users[req.body.username] = req.body
  res.status(204).end();
  console.log(users);
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});
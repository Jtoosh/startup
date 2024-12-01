const port = process.argv.length > 2 ? process.argv[2] : 4000;

const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const express = require('express');
const app = express();

const DB = require("./database.js")

const authCookieName = 'token'
 

// import {Card} from '../public/shared/card.mjs';
// import {Deck} from '../public/shared/deck.mjs'
// These classes arent working with my production file system so I am just going to declare the classes here.
class Card {
  constructor(termName, termDef, semantic) {
    this.termName = termName;
    this.termDef = termDef;
    this.semantic = semantic;
  }
}
class Deck {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
  }
}

//Set to store User objects
let users= {};

//JSON body parsing 
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//Serving static files
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses *Copied from Simon code*
app.set('trust proxy', true);

// Router for all service endpoints
let apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/healthcheck', async (req, res) => {
  res.send("Hello! I'm working!!")
})


//Endpoint for creating a new user
apiRouter.post('/auth/create', async (req, res) => {
  console.log('Create Endpoint Called!!')
  
  try {
    if (await DB.getUser(req.body.username)){
    res.status(409).send({msg: 'Existing user'});
   } else {
    const user = await DB.createUser(req.body.username, req.body.password);
    // users[user.username] = user; 
    setAuthCookie(res, user.token)   
    res.json(user);}
  }
  catch (error) {
    console.error("Error in '/auth/create':", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
});

//Endpoint for loging in an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username)
  if (user){
    if(await bcrypt.compare(req.body.password, user.password)){
      setAuthCookie(res, user.token)
      res.json(user);
      return
    }
  }
  res.status(401).send({msg: 'Unauthorized' });
}); 

//Endpoint for logging a user out
apiRouter.post('/auth/logout', async (req, res) => {
  await DB.updateUser(req.body);
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// setAuthCookie in the HTTP response *Copied from Simon code*
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//   // Graceful shutdown logic
//   process.on('SIGTERM', () => {
//     console.log('SIGTERM signal received: closing HTTP server');
//     server.close(() => {
//       console.log('HTTP server closed');
//       process.exit(0);
//     });
//   });

//   process.on('SIGINT', () => {
//     console.log('SIGINT signal received: closing HTTP server');
//     server.close(() => {
//       console.log('HTTP server closed');
//       process.exit(0);
//     });
//   });

// } catch (error) {
//   console.error('Error starting server:', error);
//   process.exit(1); // Exit with failure

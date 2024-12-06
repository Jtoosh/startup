const {WebSocketServer} = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer){
  const webSocketServer = new WebSocketServer({noServer:true});

  //Handle the protocol upgrade from HTTP to WS (since I don't want all of the traffic to be WS)
  httpServer.on('upgrade', (request, socket, head) => {
    webSocketServer.handleUpgrade(request, socket, head, function done(webSocketConn){
      webSocketServer.emit('connection', webSocketConn, request)
    });
  });

  //Store the connections
  let connections = []

  webSocketServer.on('connection', (webSocketConn) =>{
    const connection = {id: uuid.v4(), alive: true, wsConnection: webSocketConn}
    connections.push(connection)

    webSocketConn.on('message', function message(data){
      connections.foreach((conn) => {
        if (conn.id !== connection.id){
          conn.wsConnection.send(data);
        }
      })
    })

    webSocketConn.on('close', () =>{
      const pos = connections.findIndex((closedConn) => closedConn.id === connection.id);

      if (pos >=0){
        connections.splice(pos,1);
      }
    });

    webSocketConn.on('pong', ()=>{
      connection.alive = true;
    });
  })

  setInterval(()=>{
    connections.foreach((conn) => {
      if (!conn.alive){
        conn.wsConnection.terminate();
      } else {
        conn.alive = false;
        conn.wsConnection.ping();
      }
    });
  }, 10000);
}

module.exports = { peerProxy };
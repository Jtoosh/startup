const StudyEvent = {
  System: 'system',
  End: 'sessionEnd',
  Start: 'sessionStart',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class StudyEventNotifier{
  events = []
  handlers = []

  constructor(){
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('Mnemonic Study ', StudyEvent.System, {msg: 'connected.'}));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('Mnemonic Study ', StudyEvent.System, {msg: "disconnected."}));
    };
    this.socket.onmessage = async (msg)=>{
      try{
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      }catch{}
    };
  }

  sendMessage(sender, type, text){
    const message = new EventMessage(sender, type, text);
    this.socket.send(JSON.stringify(message));
  }

  addHandler(handler){
    this.handlers.push(handler)
  }

  removeHandler(handler){
    this.handlers.filter((h) => {h !== handler})
  }

  //This is eventually going to update the state variable in the onlineStatus.jsx component when it is executed.
  receiveEvent(event){
    this.events.push(event);

    this.events.forEach((e)=>{
      this.handlers.forEach((handler) =>{handler(e)});
    });
  }
}

const StudyNotifier = new StudyEventNotifier
export {StudyEvent, StudyNotifier }
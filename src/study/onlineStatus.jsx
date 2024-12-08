import React from 'react';
import { StudyEvent, StudyNotifier } from './studyNotifier.mjs';

export function OnlineStatus(props) {

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    StudyNotifier.handlers.push(handleStudyEvent);

    return () => {
      StudyNotifier.handlers.pop(handleStudyEvent);
    };
  });

  function handleStudyEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray(){
    const messageArray = [];
    for (const [i, event] of events.entries()){
      let message = 'unknown';
      if (event.type === StudyEvent.End){
        message = `just ended a study session!`;
      } else if (event.type === StudyEvent.Start){
        message = `just started a study session!`;
      } else if (event.type === StudyEvent.System){
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'study-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
  }


 return <div className='container-fluid bg-secondary my-5 h-100 mh-100'>
    <p>Placeholder for Websocket!!
     
    </p>
    <div id='study-messages'>{createMessageArray()}</div>
 </div> 
}
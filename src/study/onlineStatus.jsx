import React from 'react';
import "./study.css";
import { StudyEvent, StudyNotifier } from './studyNotifier.mjs';

export function OnlineStatus() {

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    StudyNotifier.addHandler(handleStudyEvent);

    return () => {
      StudyNotifier.removeHandler(handleStudyEvent);
    };
  }, [events]);

  function handleStudyEvent(event) {
    setEvent([...events, event]);
  }
  // This function from the Simon code didn't really work for me, so I called .map directly on the events array in the return
  // statement, and also used a switch statement instead.

  // function createMessageArray(){
  //   const messageArray = [];
  //   for (const [i, event] of events.entries()){
  //     let message = 'unknown';
  //     if (event.type === StudyEvent.End){
  //       message = `just ended a study session!`;
  //     } else if (event.type === StudyEvent.Start){
  //       message = `just started a study session!`;
  //     } else if (event.type === StudyEvent.System){
  //       message = event.value.msg;
  //     }

  //     messageArray.push(
  //       <div key={i} className='event'>
  //         <span className='study-event'>{event.from.split('@')[0]}</span>
  //         {message}
  //       </div>
  //     );
  //     console.log(messageArray);
  //   }
  // }

  function getMessage(event) {
    switch (event.type) {
      case StudyEvent.End:
        return ` just ended a study session!`;
      case StudyEvent.Start:
        return ` just started a study session!`;
      case StudyEvent.System:
        return event.value.msg;
      default:
        return ' unknown';
    }
    
  }


 return <div style={{ minHeight: '100px'}} className='container-fluid bg-info border border-secondary border-5 my-5 h-100' >
    <h2>See who is online!</h2>
    <div id='study-messages'>{events.map(event => (
      <div className='event'>
        <span className='study-event'>{event.from.split('@')[0]}</span>
        {getMessage(event)}
      </div>
    ))}</div>
 </div> 
}
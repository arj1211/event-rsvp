import React, {useRef} from 'react';
import EventDetails from './components/EventDetails';
import RsvpForm from './components/RsvpForm';
import Example from './components/Example'

const App = () => {

  const scrollRef = useRef(null);

  const scrollToRsvpForm = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <EventDetails scrollToTarget={scrollToRsvpForm}/>
      <RsvpForm scrollRef={scrollRef}/>
    </div>
  );
};

export default App;

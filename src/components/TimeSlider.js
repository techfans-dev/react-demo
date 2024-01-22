import React, { useState } from 'react';
import TimeSlider from './TimeSlider';

const App = () => {
  const [selectedTime, setSelectedTime] = useState(12);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  return (
    <div>
      <h1>React Time Slider Example</h1>
      <TimeSlider value={selectedTime} onChange={handleTimeChange} />
    </div>
  );
};

export default App;
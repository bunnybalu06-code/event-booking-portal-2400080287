import React, { useState, memo, useCallback } from 'react';

const BookEventButton = memo(({ onBookEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  console.log(`[Render] BookEventButton rendered - Render Count: ${renderCount}`);

  // useCallback to memoize handleClick and prevent unnecessary recreations
  const handleClick = useCallback(() => {
    console.log(`[Performance] BookEventButton.handleClick called - Render Count: ${renderCount}`);
    
    if (eventName.trim() && eventDate) {
      console.log(`[Button Click] Booking event: ${eventName} on ${eventDate}`);
      onBookEvent(eventName, eventDate);
      setEventName('');
      setEventDate('');
    } else {
      console.warn(`[Validation] Event name or date is empty`);
    }
  }, [eventName, eventDate, onBookEvent, renderCount]);

  // useCallback for input handlers
  const handleNameChange = useCallback((e) => {
    console.log(`[Input] Event name changed to: ${e.target.value}`);
    setEventName(e.target.value);
  }, []);

  const handleDateChange = useCallback((e) => {
    console.log(`[Input] Event date changed to: ${e.target.value}`);
    setEventDate(e.target.value);
  }, []);

  const triggerButtonReRender = useCallback(() => {
    console.log(`[Performance] Triggering BookEventButton re-render...`);
    setRenderCount(prev => prev + 1);
  }, []);

  return (
    <div className="book-event-button-container">
      <h2>Book an Event</h2>
      <div className="form-group">
        <label htmlFor="event-name">Event Name:</label>
        <input
          id="event-name"
          type="text"
          value={eventName}
          onChange={handleNameChange}
          placeholder="Enter event name"
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label htmlFor="event-date">Event Date:</label>
        <input
          id="event-date"
          type="date"
          value={eventDate}
          onChange={handleDateChange}
          className="input-field"
        />
      </div>

      <div className="button-group">
        <button 
          onClick={handleClick}
          className="book-btn"
        >
          Book Event
        </button>
        <button 
          onClick={triggerButtonReRender}
          className="rerender-btn-child"
        >
          Trigger Re-render (Test)
        </button>
      </div>
      <p className="button-info">Button Render Count: {renderCount}</p>
    </div>
  );
});

BookEventButton.displayName = 'BookEventButton';

export default BookEventButton;

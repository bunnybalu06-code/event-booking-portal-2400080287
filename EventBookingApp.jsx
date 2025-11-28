import React, { useState, useCallback } from 'react';
import BookEventButton from './BookEventButton';
import EventList from './EventList';
import './EventBookingApp.css';

const EventBookingApp = () => {
  const [events, setEvents] = useState([]);
  const [renderCount, setRenderCount] = useState(0);

  // useCallback to memoize handleBookEvent and prevent unnecessary recreations
  const handleBookEvent = useCallback((eventName, eventDate) => {
    console.log(`[Performance] handleBookEvent called - Render Count: ${renderCount}`);
    console.log(`[Event Booked] Event: ${eventName}, Date: ${eventDate}`);
    
    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: eventDate,
      bookedAt: new Date().toLocaleTimeString()
    };
    
    setEvents(prevEvents => [...prevEvents, newEvent]);
    console.log(`[Success] Event added. Total events: ${events.length + 1}`);
  }, [renderCount, events.length]);

  // useCallback to memoize handleCancelEvent
  const handleCancelEvent = useCallback((eventId) => {
    console.log(`[Performance] handleCancelEvent called - Render Count: ${renderCount}`);
    console.log(`[Event Cancelled] Event ID: ${eventId}`);
    
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
    console.log(`[Success] Event removed. Total events: ${events.length - 1}`);
  }, [renderCount, events.length]);

  // Handler to trigger re-render for performance testing
  const triggerReRender = useCallback(() => {
    console.log(`[Performance] Triggering re-render...`);
    setRenderCount(prev => prev + 1);
  }, []);

  console.log(`[Render] EventBookingApp rendered - Render Count: ${renderCount}`);

  return (
    <div className="event-booking-app">
      <h1>Event Booking Portal</h1>
      <div className="app-info">
        <p>Total Events Booked: {events.length}</p>
        <p>App Render Count: {renderCount}</p>
      </div>
      
      <div className="controls-section">
        <BookEventButton onBookEvent={handleBookEvent} />
        <button 
          className="rerender-btn" 
          onClick={triggerReRender}
        >
          Trigger Re-render for Performance Test
        </button>
      </div>

      <div className="events-section">
        <EventList 
          events={events} 
          onCancelEvent={handleCancelEvent}
        />
      </div>
    </div>
  );
};

export default EventBookingApp;

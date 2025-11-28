import React, { memo, useCallback } from 'react';
import EventItem from './EventItem';

const EventList = memo(({ events, onCancelEvent }) => {
  console.log(`[Render] EventList rendered with ${events.length} events`);

  // useCallback to memoize handleCancel
  const handleCancel = useCallback((eventId) => {
    console.log(`[EventList] Canceling event with ID: ${eventId}`);
    onCancelEvent(eventId);
  }, [onCancelEvent]);

  if (events.length === 0) {
    return (
      <div className="event-list-empty">
        <p>No events booked yet. Start by booking an event!</p>
      </div>
    );
  }

  return (
    <div className="event-list-container">
      <h2>Booked Events ({events.length})</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
});

EventList.displayName = 'EventList';

export default EventList;

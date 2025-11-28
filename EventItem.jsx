import React, { memo, useCallback } from 'react';

const EventItem = memo(({ event, onCancel }) => {
  console.log(`[Render] EventItem rendered for event: ${event.name}`);

  // useCallback to memoize handleCancelClick
  const handleCancelClick = useCallback(() => {
    console.log(`[EventItem] Cancel button clicked for event ID: ${event.id}`);
    onCancel(event.id);
  }, [event.id, onCancel]);

  return (
    <div className="event-item">
      <div className="event-item-content">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-date">Date: {event.date}</p>
        <p className="event-booked-at">Booked at: {event.bookedAt}</p>
      </div>
      <button 
        className="cancel-btn"
        onClick={handleCancelClick}
      >
        Cancel Event
      </button>
    </div>
  );
});

EventItem.displayName = 'EventItem';

export default EventItem;

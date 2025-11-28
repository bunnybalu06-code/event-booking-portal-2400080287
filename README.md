# Event Booking Portal (ID: 2400080287)

A modern React event booking portal featuring performance optimization through `useCallback` memoization and child component click handlers.

## Features

### Core Functionality
- **Book Events**: Users can create new event bookings with event name and date
- **Event Management**: View all booked events in a centralized list
- **Cancel Events**: Remove bookings from the event list
- **Real-time Updates**: Dynamic event count display

### Performance Optimizations

#### 1. useCallback Memoization
- **EventBookingApp.jsx**: 
  - `handleBookEvent()` - Memoized event booking handler
  - `handleCancelEvent()` - Memoized event cancellation handler
  - `triggerReRender()` - Re-render trigger for performance testing

- **BookEventButton.jsx**:
  - `handleClick()` - Memoized button click handler
  - `handleNameChange()` - Memoized input change handler
  - `handleDateChange()` - Memoized date change handler

- **EventList.jsx**:
  - `handleCancel()` - Memoized event cancellation wrapper

- **EventItem.jsx**:
  - `handleCancelClick()` - Memoized cancel button handler

#### 2. React.memo for Child Components
- **BookEventButton**: Wrapped with memo() to prevent unnecessary re-renders
- **EventList**: Wrapped with memo() to optimize list rendering
- **EventItem**: Wrapped with memo() for individual event item optimization

## Component Structure

```
EventBookingApp (Parent - State Management)
├── BookEventButton (memo wrapped)
│   ├── Event name input (useCallback handler)
│   ├── Event date input (useCallback handler)
│   └── Book button (useCallback handler)
├── Re-render trigger button (useCallback handler)
└── EventList (memo wrapped)
    └── EventItem[] (memo wrapped)
        └── Cancel button (useCallback handler)
```

## Performance Monitoring

The application includes comprehensive console logging for performance analysis:

### Log Categories
- `[Render]` - Component render events
- `[Performance]` - Performance-related actions and metrics
- `[Event Booked]` - Event booking details
- `[Event Cancelled]` - Event cancellation details
- `[Button Click]` - Button interaction tracking
- `[Input]` - Input field change tracking
- `[Validation]` - Validation checks
- `[Success]` - Operation completion status

### Console Output Example
```
[Render] EventBookingApp rendered - Render Count: 0
[Performance] handleBookEvent called - Render Count: 0
[Event Booked] Event: Conference 2025, Date: 2025-12-15
[Success] Event added. Total events: 1
```

## Testing Performance

### 1. Verify useCallback Optimization
```javascript
// Click "Trigger Re-render for Performance Test" buttons
// Observe console logs to verify functions aren't recreated
```

### 2. Monitor Render Counts
- Check "App Render Count" and "Button Render Count" displays
- Verify that component re-renders are minimized

### 3. Event Booking Flow
1. Enter an event name
2. Select an event date
3. Click "Book Event"
4. Observe console logs for performance metrics
5. View the newly booked event in the list

### 4. Event Cancellation Flow
1. Click "Cancel Event" on any booked event
2. Observe console logs for cancellation tracking
3. Verify event is removed from the list

## Key Performance Benefits

1. **Reduced Function Recreation**: useCallback prevents function recreation on every render
2. **Memoized Components**: memo() prevents unnecessary child component re-renders
3. **Dependency Optimization**: Carefully managed dependency arrays minimize memoization misses
4. **Event Batching**: State updates are batched for optimal performance
5. **Render Tracking**: Console logs help identify render bottlenecks

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

## Technologies Used

- **React 18**: Latest React features and hooks
- **React Hooks**: useState, useCallback, memo
- **JavaScript ES6**: Modern JavaScript syntax
- **Console Logging**: Built-in performance monitoring

## Files in Repository

- `package.json` - Project dependencies and configuration
- `EventBookingApp.jsx` - Main app component with state management
- `BookEventButton.jsx` - Event booking form component
- `EventList.jsx` - Event list display component
- `EventItem.jsx` - Individual event item component
- `README.md` - This documentation file

## Performance Metrics to Monitor

1. **Render Count**: Track component re-renders
2. **Function Recreation**: Verify memoized functions aren't recreated
3. **Console Logs**: Monitor performance flags and metrics
4. **Memory Usage**: Check for memory leaks during extended use
5. **Interaction Latency**: Measure response time to user actions

## Best Practices Implemented

✅ useCallback for memoizing event handlers
✅ React.memo for component memoization
✅ Proper dependency arrays in hooks
✅ displayName for better debugging
✅ Console logging for performance tracking
✅ Separation of concerns across components
✅ Clean event handling patterns

## Future Enhancements

- Add event persistence with localStorage
- Implement event filtering and sorting
- Add calendar view for events
- Implement user authentication
- Add event notifications/reminders
- Implement event editing functionality
- Add analytics dashboard

## License

MIT License - feel free to use this project for educational purposes.

---

**Repository ID**: 2400080287
**Version**: 1.0.0
**Last Updated**: 2025-11-28

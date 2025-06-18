const ObjectName = object('ObjectID');
addToTimeline(
  rect.animate(
    [
      { transform: 'translateX(0px)' },
      { transform: 'translateX(200px) rotate(45deg)', filter: 'blur(4px)' }
    ],
    {
      duration: 1000, // Animation duration in milliseconds<
      easing: 'ease-in-out', // Easing function
      fill: 'forwards' // Keep the final state after animation
    }
  )
);
//Animation Use the native JavaScript animate function—a feature-rich animation API—to create animations. Animations created with this function don’t alter the properties described above. Instead, these animations operate independently within their own scope and are designed to be modern static animations on the timeline.

// To make animations seekable on the timeline, wrap them in the addToTimeline
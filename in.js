AFRAME.registerComponent('swipe-to-attach', {
    init: function () {
      // Get the elements
      var shape1 = document.getElementById('shape1');
      var shape2 = document.getElementById('shape2');
  
      // Set the initial position of shape2
      var initialPosition = shape2.getAttribute('position');
      
      // Define swipe parameters
      var swipeThreshold = 0.2;  // Adjust as needed
      var swipeDirection = null;  // 'left' or 'right'
      
      // Listen for touch events
      var touchStartX;
  
      this.el.addEventListener('touchstart', function (event) {
        touchStartX = event.touches[0].clientX;
      });
  
      this.el.addEventListener('touchend', function (event) {
        var touchEndX = event.changedTouches[0].clientX;
        var deltaX = touchEndX - touchStartX;
  
        if (deltaX > swipeThreshold) {
          swipeDirection = 'right';
        } else if (deltaX < -swipeThreshold) {
          swipeDirection = 'left';
        }
  
        // Check swipe direction and update position accordingly
        if (swipeDirection === 'left') {
          // Update the position of shape2 based on your desired logic
          var newPosition = { x: shape1.object3D.position.x + 1, y: initialPosition.y, z: initialPosition.z };
          shape2.setAttribute('position', newPosition);
        } else if (swipeDirection === 'right') {
          // Update the position of shape2 based on your desired logic
          var newPosition = { x: shape1.object3D.position.x - 1, y: initialPosition.y, z: initialPosition.z };
          shape2.setAttribute('position', newPosition);
        }
      });
    }
  });
  

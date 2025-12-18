// Reading Ruler Demo Overlay
(function() {
    // Create overlay element
    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'trr-demo-overlay';
    document.body.appendChild(overlayDiv);

    var checkbox = document.getElementById('trr-demo-checkbox');
    var titleLink = document.querySelector('.trr-title-active');
    var isEnabled = false;
    var mouseY = 0;
    var lastMouseY = window.innerHeight / 2; // Track last mouse position

    // Update overlay position
    function updateOverlay(clientY) {
        mouseY = clientY + 17; // Position below cursor
        lastMouseY = clientY; // Store last position
        var windowHeight = window.innerHeight;
        var overlayHeight = windowHeight - mouseY;

        overlayDiv.style.height = overlayHeight + 'px';
        overlayDiv.style.opacity = 1;
    }

    // Mouse move handler
    function handleMouseMove(event) {
        if (!isEnabled) return;
        updateOverlay(event.clientY);
    }

    // Track mouse position even when overlay is off
    function trackMousePosition(event) {
        lastMouseY = event.clientY;
    }

    // Mouse out handler
    function handleMouseOut(event) {
        // Check if mouse actually left the window
        if (event.relatedTarget === null || event.clientY <= 0 || event.clientY >= window.innerHeight) {
            overlayDiv.style.opacity = 0;
        }
    }

    // Mouse enter handler
    function handleMouseEnter() {
        if (isEnabled) {
            overlayDiv.style.opacity = 1;
        }
    }

    // Toggle overlay
    function toggleOverlay(event) {
        isEnabled = checkbox.checked;

        if (isEnabled) {
            overlayDiv.style.display = 'block';
            // Show overlay at current mouse position immediately
            updateOverlay(lastMouseY);
            // Add active class to show colored underline
            if (titleLink) {
                titleLink.classList.add('trr-switch-active');
            }
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseout', handleMouseOut);
            document.addEventListener('mouseenter', handleMouseEnter);
        } else {
            overlayDiv.style.display = 'none';
            overlayDiv.style.opacity = 0;
            // Remove active class to hide colored underline
            if (titleLink) {
                titleLink.classList.remove('trr-switch-active');
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseEnter);
        }
    }

    // Initialize
    if (checkbox) {
        // Always track mouse position
        document.addEventListener('mousemove', trackMousePosition);
        checkbox.addEventListener('change', toggleOverlay);
        // Set initial state
        toggleOverlay();
    }
})();
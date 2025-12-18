// Reading Ruler Demo Overlay
(function() {
    // Create overlay element
    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'trr-demo-overlay';
    document.body.appendChild(overlayDiv);

    var checkbox = document.getElementById('trr-demo-checkbox');
    var specialTitle = document.querySelector('.trr-title-special');
    var normalTitle = document.querySelector('.trr-title-normal');
    var isEnabled = false;
    var mouseY = 0;
    var lastMouseY = window.innerHeight / 2; // Track last mouse position
    var titleToggleInterval; // Store interval ID

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
            // Show special title, hide normal title
            if (specialTitle) {
                specialTitle.classList.remove('trr-title-hidden');
                specialTitle.classList.add('trr-switch-active');
            }
            if (normalTitle) {
                normalTitle.classList.add('trr-title-hidden');
            }
            // Pause the auto-toggle
            if (titleToggleInterval) {
                clearInterval(titleToggleInterval);
                titleToggleInterval = null;
            }
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseout', handleMouseOut);
            document.addEventListener('mouseenter', handleMouseEnter);
        } else {
            overlayDiv.style.display = 'none';
            overlayDiv.style.opacity = 0;
            // Show normal title, hide special title
            if (specialTitle) {
                specialTitle.classList.add('trr-title-hidden');
                specialTitle.classList.remove('trr-switch-active');
            }
            if (normalTitle) {
                normalTitle.classList.remove('trr-title-hidden');
            }
            // Resume the auto-toggle
            startTitleToggle();
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseEnter);
        }
    }

    // Auto-toggle function - glitch effect
    function startTitleToggle() {
        if (titleToggleInterval) {
            clearTimeout(titleToggleInterval);
            titleToggleInterval = null;
        }
        function glitchLoop() {
            if (specialTitle && normalTitle && !isEnabled) {
                // Show special title (glitch effect)
                specialTitle.classList.remove('trr-title-hidden');
                normalTitle.classList.add('trr-title-hidden');

                // Return to normal title after 350ms
                setTimeout(function() {
                    if (!isEnabled) {
                        specialTitle.classList.add('trr-title-hidden');
                        normalTitle.classList.remove('trr-title-hidden');
                    }
                    // Schedule next glitch with random delay between 3s and 6s
                    if (!isEnabled) {
                        var nextDelay = 3000 + Math.random() * 3000;
                        titleToggleInterval = setTimeout(glitchLoop, nextDelay);
                    }
                }, 350); // Show special title for 350ms
            } else {
                // If enabled, don't schedule next glitch
                titleToggleInterval = null;
            }
        }
        // Start the first glitch after a random delay
        var initialDelay = 3000 + Math.random() * 3000;
        titleToggleInterval = setTimeout(glitchLoop, initialDelay);
    }

    // Initialize
    if (checkbox) {
        // Always track mouse position
        document.addEventListener('mousemove', trackMousePosition);
        checkbox.addEventListener('change', toggleOverlay);
        // Set initial state
        toggleOverlay();

        // Start auto-toggle
        startTitleToggle();
    }
})();
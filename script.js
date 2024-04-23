// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get current time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // Set business level based on time
    var businessLevel;
    if (currentHour < 12) {
        businessLevel = "Low";
    } else if (currentHour < 18) {
        businessLevel = "High";
    } else {
        businessLevel = "As busy as it gets";
    }

    // Display business level
    var businessLevelElements = document.querySelectorAll('.business-level');
    businessLevelElements.forEach(function (element) {
        element.textContent = businessLevel;
    });

    // Calculate time until closing for each location
    var closingTimes = {
        'cafe-vivian': { closingHour: 22 },
        // Add closing times for other locations here
    };
    Object.keys(closingTimes).forEach(function (locationId) {
        var closingTime = closingTimes[locationId].closingHour;
        var timeUntilClosing = closingTime - currentHour;
        if (timeUntilClosing < 0) {
            timeUntilClosing += 24; // Account for closing times past midnight
        }
        var closingElement = document.getElementById(locationId + '-closing');
        if (closingElement) {
            closingElement.textContent = timeUntilClosing + ' hours';
        }
    });
});

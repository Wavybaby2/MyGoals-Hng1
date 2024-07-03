// Get the current UTC time
const utcTimeElement = document.getElementById("CurrentTimeUTC");
const utcDate = new Date();

// Format the UTC time to the desired time zone
const options = { timeZone: "Africa/Lagos", hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formatter = new Intl.DateTimeFormat("en-NG", options);
const localTime = formatter.format(utcDate);

// Display the time in the element
utcTimeElement.innerText = localTime;




document.addEventListener("DOMContentLoaded", function() {
  function updateDateTime() {
      const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
      const currentDayElement = document.querySelector('[data-testid="currentDay"]');
      
      const now = new Date();
      const utcTime = now.toUTCString().split(" ")[4];
      const day = now.toLocaleString('en-US', { weekday: 'long' });

      currentTimeElement.textContent = utcTime;
      currentDayElement.textContent = day;
  }

  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
});
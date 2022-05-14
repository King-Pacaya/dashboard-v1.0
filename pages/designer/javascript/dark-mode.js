// DOM
  var body = document.querySelector("body");
  var input6 = document.getElementById('input6');
  var input7 = document.getElementById('input7');
  var form6 = document.getElementById('form6');
  var form7 = document.getElementById('form7');
  var slidescont = document.getElementById('slidesigncont');
function updateClock() {
  // Get date
  var date = new Date();

  // Get hours and minutes
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  
  var time = hours + ":" + minutes;

  timeDisplay.innerHTML = time;
}

// Update every second
setInterval(updateClock, 100);
setInterval(check, 100);

// Check for date or night
function check() {
  
  // Get date
  var date = new Date();
  // Get hours
  var hours = date.getHours();
  
  if (hours >= 7.9 && hours <= 16.9) {
    // Day Time
    console.log("Day time");
    
    var elements = [body, input6, input7, form6, form7, slidescont];
    
    elements.forEach(function(element) {
      element.classList.remove("night");
      element.classList.add("day");
    });

  } else {
    // Night Time
    console.log("Night time");
    
    var elements = [body, input6, input7, form6, form7, slidescont];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("night");
    });

  }
}
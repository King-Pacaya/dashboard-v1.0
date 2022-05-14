// DOM
  var body = document.querySelector("body");
  var form6 = document.getElementById('form6');
  var form7 = document.getElementById('form7');
  var form8 = document.getElementById('form8');
  var form9 = document.getElementById('form9');
  var form10 = document.getElementById('form10');
  var form11 = document.getElementById('form11');
  var form21 = document.getElementById('form21');
  var form31 = document.getElementById('form31');
  var input6 = document.getElementById('input6');
  var input7 = document.getElementById('input7');
  var input8 = document.getElementById('input8');
  var input9 = document.getElementById('input9');
  var input10 = document.getElementById('input10');
  var input11 = document.getElementById('input11');
  var input21 = document.getElementById('input21');
  var input31 = document.getElementById('input31');
  var main = document.getElementById('mainu');

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
    
    var elements = [body, form6, form7, form8, form9, input6, input7, input8,
                    input9, form11, form21, form31, input11, input21, input31,
                    main, input10, form10];
    
    elements.forEach(function(element) {
      element.classList.remove("night");
      element.classList.add("day");
    });

  } else {
    // Night Time
    console.log("Night time");
    
    var elements = [body, form6, form7, form8, form9, input6, input7, input8,
                    input9, form11, form21, form31, input11, input21, input31,
                    main, input10, form10];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("night");
    });

  }
}
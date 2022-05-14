// DOM
  var body = document.querySelector("body");
  var lnav = document.getElementById('lnav');
  var licon1 = document.getElementById('licon1');
  var licon2 = document.getElementById('licon2');
  var licon3 = document.getElementById('licon3');
  var licon4 = document.getElementById('licon4');
  var licon5 = document.getElementById('licon5');
  var licon6 = document.getElementById('licon6');
  var licon7 = document.getElementById('licon7');
  var licon8 = document.getElementById('licon8');
  var tnav = document.getElementById('tnav');
  var lntittle = document.getElementById('lntittle');
  var form1 = document.getElementById('form1');
  var form2 = document.getElementById('form2');
  var form3 = document.getElementById('form3');
  var form4 = document.getElementById('form4');
  var form5 = document.getElementById('form5');
  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');
  var input3 = document.getElementById('input3');
  var input4 = document.getElementById('input4');
  var input5 = document.getElementById('input5');
  var clock = document.getElementById('MyClockDisplay');
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  var music = document.getElementById('music');
  var weather = document.getElementById('weather');
  var timer = document.getElementById('timer');

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
    
    var elements = [body, lnav, lntittle, licon1, licon2, licon3, licon4,
                    licon5, licon6, licon7, licon8, form1, form2, form3,
                    form4, form5, input1, input2, input3, input4, input5,
                    tnav, clock, next, prev, music, weather, timer];
    
    elements.forEach(function(element) {
      element.classList.remove("night");
      element.classList.add("day");
    });

  } else {
    // Night Time
    console.log("Night time");
    
    var elements = [body, lnav, lntittle, licon1, licon2, licon3, licon4,
                    licon5, licon6, licon7, licon8, form1, form2, form3,
                    form4, form5, input1, input2, input3, input4, input5,
                    tnav, clock, next, prev, music, weather, timer];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("night");
    });

  }
}
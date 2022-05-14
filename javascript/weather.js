//Weather Button
  function weatherapp()
  {
  document.getElementById("weather-app").classList.toggle("wshow");
  }

//Weather
    var celsius = true;

    function f1 (){
      
    navigator.geolocation.getCurrentPosition(function(pos) {
      
    var req = new XMLHttpRequest();
      
    req.onreadystatechange = function() {
      
        if (this.readyState == 4 && this.status == 200) {
          
            var myObj = JSON.parse(this.responseText);
          
            document.getElementById("weatherdata").innerHTML =
              myObj.name + ", " +
              myObj.sys.country + "<br/><br/>" +
              
              "Lat: " + Math.round(10*pos.coords.latitude)/10 + " Lon: " + Math.round(10*pos.coords.longitude)/10 + "<br/><br/>" +
          
               "<img src=" + myObj.weather[0].icon + ">" + "<br/>" +
              myObj.weather[0].main + "<br/><br/>" +
              
              "Temperature: " + Math.round(myObj.main.temp)             + " &#176;C" + "<br/><br/>" +
              
              "Humidity: " + myObj.main.humidity + "%";
        }
    };

    var w = "https://fcc-weather-api.glitch.me/api/current?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude;

    req.open("GET", w, true);
    req.send();
    });
      
      celsius = true;
    }


    function fF (){
      
    navigator.geolocation.getCurrentPosition(function(pos) {
      
    var req = new XMLHttpRequest();
      
    req.onreadystatechange = function() {
      
        if (this.readyState == 4 && this.status == 200) {
          
            var myObj = JSON.parse(this.responseText);
          
            document.getElementById("weatherdata").innerHTML =
              myObj.name + ", " +
              myObj.sys.country + "<br/><br/>" +
              
              "Lat: " + Math.round(10*pos.coords.latitude)/10 + " Lon: " + Math.round(10*pos.coords.longitude)/10 + "<br/><br/>" +
          
              "<img src=" + myObj.weather[0].icon + ">" + "<br/>" +
              myObj.weather[0].main + "<br/><br/>" +
              
              "Temperature: " + Math.round(myObj.main.temp)              + " &#176;C" + "<br/><br/>" +
              
              "Humidity: " + myObj.main.humidity + "%";
        }
    };

    var w = "https://fcc-weather-api.glitch.me/api/current?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude;

    req.open("GET", w, true);
    req.send();
    });
      
      celsius = false;
    }


    function switchCelsiusAndFahrenheit () {
      
      if(celsius){
        fF();
      }
      else{
        f1();
      }
      
    }

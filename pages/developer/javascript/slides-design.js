var slidejav = 1;
showslidesign(slidejav);

function btnslide(m) {
  showslidesign(slidejav += m);
}

function currentSlide(m) {
  showslidesign(slidejav = m);
}

function showslidesign(m) {
  var f;
  var slidess = document.getElementsByClassName("slidesign");
  var dotss = document.getElementsByClassName("dotd");
  if (m > slidess.length) {slidejav = 1}
  if (m < 1) {slidejav = slidess.length}
  for (f = 0; f < slidess.length; f++) {
      slidess[f].style.display = "none";  
  }
  for (f = 0; f < dotss.length; f++) {
      dotss[f].className = dotss[f].className.replace(" active", "");
  }
  slidess[slidejav-1].style.display = "block";  
  dotss[slidejav-1].className += " active";
}
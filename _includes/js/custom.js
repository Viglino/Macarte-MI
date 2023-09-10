document.addEventListener("DOMContentLoaded", function() {
  // Fullscreen
  var fullscreen = document.createElement('DIV');
  fullscreen.dataset.fullscreen = '';
  fullscreen.addEventListener('click', function() {
    fullscreen.className = '';
  })
  document.body.appendChild(fullscreen);
  var fullscreenImg = document.createElement('IMG');
  fullscreen.appendChild(fullscreenImg)
  // on click
  function setImage(img) {
    img.addEventListener('click', function() {
      fullscreenImg.src = img.src;
      setTimeout(function() {
        fullscreen.className = 'visible';
      }, 300)
    })
  }
  var fscreen = document.querySelectorAll('img.fullscreen');
  for (var i=0; i<fscreen.length; i++) setImage(fscreen[i]);
});


var switchModeButton = document.getElementById("switch-mode-button");
var isDarkMode = false;

switchModeButton.addEventListener("click", function() {
  if (isDarkMode) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
      document.body.style.backgroundColor = "rgb(64, 64, 64)";
    document.body.style.color = "white";
  }
  isDarkMode = !isDarkMode;
});
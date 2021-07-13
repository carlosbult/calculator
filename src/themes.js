let toggle = document.getElementById("themeToggle");

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.body.className = themeName;
  }
  
function loadTheme() {
    if (localStorage.getItem("theme") === "secondTHEME") {
      setTheme("secondTHEME");
      toggle.value = 2;
    } else if (localStorage.getItem("theme") === "thirdTHEME") {
      setTheme("thirdTHEME");
      toggle.value = 3;
    } else {
      setTheme("firstTHEME");
      toggle.value = 1;
    }
  }
  
function selectTheme() {
    if (toggle.value == 1) {
      setTheme("firstTHEME");
    } else if (toggle.value == 2) {
      setTheme("secondTHEME");
    } else if (toggle.value == 3) {
      setTheme("thirdTHEME");
    }
  }
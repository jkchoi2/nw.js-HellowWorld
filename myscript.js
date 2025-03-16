var gui = require("nw.gui");

window.onfocus = function() { 
  console.log("focus");
};

window.onblur = function() { 
  console.log("blur");
};

window.onresize = function() {
};

window.onload = function() {

  document.getElementById("btnExit").onclick = function() {
    window.close();
  };

  document.getElementById("btnDeveloper").onclick = function () {

    var win = gui.Window.get();
    win.showDevTools();
    this.innerText = "Developer Tools";
  };
};

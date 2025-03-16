var gui = require("nw.gui");

// Extend application menu for Mac OS
if (process.platform == "darwin") {
  var menu = new gui.Menu({type: "menubar"});
  menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
  gui.Window.get().menu = menu;
}

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
  gui.Window.get().show();
};


function make_menu()
{
  // Create an empty context menu
  var menu = new nw.Menu();

  // Add some items with label
  menu.append(new nw.MenuItem({
    label: 'Item A',
    click: function() { 
      alert('You have clicked at "Item A"');
      console.log('clicked.');
    }
  }));

  menu.append(new nw.MenuItem({ label: 'Item BB' }));
  menu.append(new nw.MenuItem({ type: 'separator' }));
  menu.append(new nw.MenuItem({ label: 'Item C' }));
  // Hooks the "contextmenu" event
  document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();    // Prevent showing default context menu
    menu.popup(ev.x, ev.y); // Popup the native context menu at place you click
    return false;
  }, false);  

};

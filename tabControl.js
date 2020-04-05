// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = "mouse_visited";
// Previous dom, that we want to track, so we can remove the previous styling.

var prevVisited;
var isOn;
var isClickTextTitleOn;
var fileName;

if (typeof isItInited === "undefined") {
  var isItInited = false;
  document.addEventListener("mousemove", mousemoveEventHandler, false);
  document.addEventListener("contextmenu", resetHandler);
  document.addEventListener("click", clickEventHandler, false);
  init();
}

function init() {
  reset();
  isClickTextTitleOn = false;
}
function reset() {
  if (prevVisited != null) {
    prevVisited.classList.remove(MOUSE_VISITED_CLASSNAME);
  }
  prevVisited = null;
  isOn = false;
  fileName = null;
}
isClickTextTitleOn;
function downloadText(textrString) {
  var blob = new Blob([textrString], {
    type: "text/plain",
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = fileName + ".txt";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  delete a;
}

function mousemoveEventHandler(e) {
  if (!isOn) {
    return;
  }
  var srcElement = e.srcElement;
  if (prevVisited != null) {
    prevVisited.classList.remove(MOUSE_VISITED_CLASSNAME);
  }
  srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
  prevVisited = srcElement;
}
function resetHandler() {
  deactivate();
}

function clickEventHandler(e) {
  if (!isOn) {
    return;
  }
  isOn = false;
  var srcElement = e.srcElement;
  if (isClickTextTitleOn && fileName === null) {
    fileName = String(srcElement.innerText).trim();
    isOn = true;
    return;
  } else if (isClickTextTitleOn === false) {
    var fileTitle = prompt("Type Text File Title", "");
    if (fileTitle === null) {
      reset();
      return;
    }
    fileName = String(fileTitle).trim();
  }
  downloadText(srcElement.innerText);
  deactivate();
}

function activate() {
  reset();
  isOn = true;
}
function deactivate() {
  isOn = false;
  reset();
}

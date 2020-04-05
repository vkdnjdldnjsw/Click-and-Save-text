// Mouse listener for any move event on the current document.
chrome.tabs.executeScript({
  file: "tabControl.js",
});
chrome.tabs.insertCSS({
  file: "styles.css",
});

window.onload = function () {
  var onOffButton = document.getElementById("onOffButton");
  var isClickTextTitleCheckBox = document.getElementsByName(
    "isClickTextTitleCheckBox"
  )[0];
  chrome.tabs.executeScript(
    {
      code: "isOn",
    },
    function (result) {
      if (result === undefined || result[0] === null) {
        chrome.tabs.executeScript({
          code: "init()",
        });
        return;
      }
      var isOn = result[0];
      chrome.tabs.executeScript(
        {
          code: "isClickTextTitleOn",
        },
        function (result) {
          var isClickTextTitleOn = result[0];
          if (isOn === true) {
            onOffButton.innerText = "activated";
          } else {
            onOffButton.innerText = "deactivated";
          }
          isClickTextTitleCheckBox.checked = isClickTextTitleOn;
        }
      );
    }
  );
  onOffButton.onclick = function () {
    if (onOffButton.innerText == "deactivated") {
      onOffButton.innerText = "activated";
      chrome.tabs.executeScript({
        code: "activate()",
      });
    } else {
      onOffButton.innerText = "deactivated";
      chrome.tabs.executeScript({
        code: "deactivate()",
      });
    }
  };
  isClickTextTitleCheckBox.onchange = function () {
    chrome.tabs.executeScript({
      code: "isClickTextTitleOn = " + isClickTextTitleCheckBox.checked,
    });
  };
};

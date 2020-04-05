chrome.commands.onCommand.addListener(function (command) {
  if (command === "activate") {
    chrome.tabs.executeScript(
      {
        file: "tabControl.js",
      },
      function (result) {
        chrome.tabs.insertCSS(
          {
            file: "styles.css",
          },
          function () {
            chrome.tabs.executeScript({
              code: "activate();",
            });
          }
        );
      }
    );
  }
});
chrome.commands.onCommand.addListener(function (command) {
  if (command === "Toggle the click title option") {
    chrome.tabs.executeScript(
      {
        file: "tabControl.js",
      },
      function (result) {
        chrome.tabs.insertCSS(
          {
            file: "styles.css",
          },
          function () {
            chrome.tabs.executeScript({
              code: "isClickTextTitleOn=!isClickTextTitleOn;",
            });
          }
        );
      }
    );
  }
});

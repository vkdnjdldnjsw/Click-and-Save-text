chrome.commands.onCommand.addListener(function (command) {
  if (command === "activate_key") {
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
  if (command === "toggle_the_click_title") {
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

let popupWindowId=null
chrome.runtime.onMessage.addListener(function(message) {
  console.log("messsage", message)
  if (message== "openPopup") {
    chrome.windows.create({
      url: "index.html",
      type: "popup",
      focused: true,
      top: 200,
      left: 200,
      width: 450,
      height: 600
    }, function(window) {
      popupWindowId = window.id; // Store the ID of the popup window
    });
  }else if (message=="deletepopup") {
    // Close the popup window if a different message is received
    chrome.windows.remove(popupWindowId, function() {
      popupWindowId = null; // Reset the stored window ID
    });
  }
})
    

    
   
    
//  // }
// });


// chrome.runtime.onMessage.addListener(function(message) {
//   console.log("message", message);
//   if (message === "openPopup") {
//     window.open('index.html', 'Popup', 'width=500,height=400');
//     // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     //   const tab = tabs[0];
//     //   if (/^https?:\/\/(www\.)?youtube\.com\/watch/.test(tab.url)) {
//     //     chrome.scripting.executeScript({
//     //       target: { tabId: tab.id },
//     //       function: injectPopupContent
//     //     });
//     //   } else {
//     //     console.error("Host permission not granted.");
//     //   }
//     // });
//   }
// });

// function injectPopupContent() {
//   fetch(chrome.runtime.getURL("index.html"))
//     .then(response => response.text())
//     .then(html => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       document.documentElement.replaceWith(doc.documentElement);
//     })
//     .catch(error => console.error(error));
// }



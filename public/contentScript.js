// Get the center div element


let centerDiv = document.getElementById("center");

// Create the toggle button
let button = document.createElement("button");
// button.style.height = "50px";
// button.style.width = "100px";
// button.innerText = "Show";
button.classList.add("toggle-button");
button.style.backgroundColor = "white";
button.style.color="hsl(204, 67%, 42%)";
button.innerText = "Activate ChatGPT";
if(centerDiv){
centerDiv.appendChild(button);
}

// Create the popup div
let popupDiv = document.createElement("div");
popupDiv.style.display = "none";
popupDiv.style.position = "absolute";
popupDiv.style.top = "50%";
popupDiv.style.left = "50%";
popupDiv.style.transform = "translate(-50%, -50%)";
popupDiv.style.padding = "20px";
popupDiv.style.backgroundColor = "#ffffff";
popupDiv.style.border = "1px solid #000000";
let popupele= document.getElementById("root");
// console.log("pupele", popupele)
console.log("pupele",popupele);
// popupDiv.appendChild(popupele)

// popupDiv.innerText = "This is the popup";
   
if(centerDiv){
centerDiv.appendChild(popupDiv);
}

let isPopupVisible = false;

// Toggle button click event handler
button.addEventListener("click", function() {
  isPopupVisible = !isPopupVisible;
  if (!isPopupVisible) {
    popupDiv.style.display = "none";
    button.innerText = "Activate ChatGPT";
    button.style.backgroundColor = "white";
    button.style.width = "150px";
button.style.color="hsl(204, 67%, 42%)";
chrome.runtime.sendMessage("deletepopup");
  } else {
    //popupDiv.style.display = "block";
    button.innerText = "Deactivate ChatGPT";
    button.style.backgroundColor = "hsl(204, 67%, 42%)";
    button.style.color="white";
    button.style.width = "150px";
    chrome.runtime.sendMessage("openPopup");
    
    //popupDiv.innerHTML = '<object type="text/html" data="index.html"></object>';
   
   // chrome.runtime.sendMessage({ action: "performAction" })
   
   
    
  }
 
});


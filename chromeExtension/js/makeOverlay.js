var myDiv = document.createElement("div");
var myP = document.createElement("p");

myDiv.id = "overlay-click-button";
myDiv.appendChild(myP);

myDiv.style.background = "rgba(47, 208, 89, 0)";
myDiv.style.alignSelf = "right";
myDiv.style.position = "fixed";
myDiv.style.border = "5px solid rgb(47, 208, 89)";
myDiv.style.opacity = "100%";
myDiv.style.borderRadius = "10px";
myDiv.style.top = "30%";
myDiv.style.left = "80%";
myDiv.style.width = "300px";
myDiv.style.height = "300px";
myDiv.style.textAlign = "center";
myDiv.style.display = "table";

myP.style.display = "table-cell";
myP.style.verticalAlign = "middle";
myP.innerText = "hover me to click";


document.body.appendChild(myDiv);


function CopyURLToClipboard(e) {
    navigator.clipboard.writeText(e.href);
}

function addElement(currentDiv, id) {
    const newDiv = document.createElement("a");
    newDiv.href = "#" + id;
    newDiv.className = "dynamic-anchor-link"
    newDiv.addEventListener("click", function () { navigator.clipboard.writeText(this.href); });
    const newContent = document.createTextNode("#");
    newDiv.appendChild(newContent);
    currentDiv.appendChild(newDiv);
}
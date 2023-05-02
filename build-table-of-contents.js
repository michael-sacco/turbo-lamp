String.prototype.cleanup = function() {
   return this.replace(/[^a-zA-Z0-9]+/g, "-");
}

function generateIdBasedOnTitle(titletoconvert) {
  return titletoconvert
    .toLowerCase().trim()
    .cleanup()
    .replace(/-+$/g,"");
}


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

const observer = new IntersectionObserver(entries => {
    entries.every(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
            document.querySelectorAll(".active").forEach((z) => {
                z.classList.remove("active")
            });
            const activeElement = document.querySelector(`a[href="#${id}"]`);
            activeElement.classList.add("active")
            activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            return false;
        }
        return true;
    });
}, { rootMargin: '0% 0px -90% 0px', threshold: 0.01 });


async function BuildTOC()
{
    document.getElementById("content").querySelectorAll("#content > div").forEach(function (section, i)
  {
  	if(section.classList.contains("w-condition-invisible"))
        return;
    
  	section.querySelectorAll("h2,h3").forEach(function(heading, i)
    {
      let str = heading.textContent; // adds section titles to slugs
      observer.observe(heading);
      heading.setAttribute("id", generateIdBasedOnTitle(str));
      const item = document.createElement("a"); // creates an anchor element called "item"
      item.innerHTML = heading.textContent; // gives each item the text of the corresponding heading
      
      item.classList.add("tocitem");
      if(heading.nodeName == "H3")
      {
      	 item.classList.add("subheader");
      }
      item.setAttribute("href", "#" + heading.getAttribute("id")); // gives each item the correct anchor link
      document.querySelector("#toc").appendChild(item); // places each item inside the Table of Contents div
    });
  });
}

BuildTOC();


$('.content-block > div > h3').each(function () {
    const currentDiv = this;
    this.style.display = "flex";
    this.style.flexDirection = "row";
    addElement(currentDiv, this.getAttribute("id"))
});

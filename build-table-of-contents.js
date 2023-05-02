String.prototype.cleanup = function() {
   return this.replace(/[^a-zA-Z0-9]+/g, "-");
}

function generateIdBasedOnTitle(titletoconvert)
{
  return titletoconvert
    .toLowerCase().trim()
    .cleanup()
    .replace(/-+$/g,"");
}

function CopyURLToClipboard(e)
{
    navigator.clipboard.writeText(e.href);
}

function addHashLink(currentDiv, id)
{
    const newDiv = $(document.createElement("a"));
    newDiv.attr("href", "#" + id);
    newDiv.addClass("dynamic-anchor-link");

    newDiv.click(function () { navigator.clipboard.writeText(this.href); });
    newDiv.append("#");
    $(currentDiv).append(newDiv);
    //const newContent = document.createTextNode("#");
    //newDiv.appendChild(newContent);
    //currentDiv.appendChild(newDiv);
}

function setupHashLinks() {
    $('.content-block > div > h3').each(function (index) {
        $(this).css("display", "flex");
        $(this).css("flexDirection", "row");
        addHashLink(this, $(this).attr("id"))
    });
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


function buildTOC()
{
    const tableContainer = $("#toc");

    $("#content > div").each(function (index) {

        if ($(this).hasClass(".w-condition-invisible"))
            return;

        $("h2, h3").each(function (index) {

            // Add to observer
            observer.observe(this); 

            // Setup ID
            let str = $(this).text();
            let id = generateIdBasedOnTitle(str);
            $(this).attr("id", id);

            // Setup new Element
            const tocItem = $(document.createElement("a")); // creates an anchor element called "item"
            tocItem.html(str); // gives each item the text of the corresponding heading
            tocItem.addClass("tocitem");


            // Set an additional subhead class for H3
            if ($(this).prop("nodeName") == "H3") {
                tocItem.addClass("subheader");
            }

            // Assigns ID to href
            tocItem.attr("href", "#" + id); // gives each item the correct anchor link

            // Appends to table.
            tableContainer.append(tocItem); // places each item inside the Table of Contents div
        });
    });
}

$(document).ready(buildTOC);
$(document).ready(setupHashLinks);
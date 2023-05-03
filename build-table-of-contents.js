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
}


function addHashLinkDirect($currentDiv, url) {
    const newDiv = $(document.createElement("a"));
    newDiv.attr("href", url);
    newDiv.addClass("dynamic-anchor-link");

    newDiv.click(function () { navigator.clipboard.writeText(this.href); });
    newDiv.append("#");
    $currentDiv.append(newDiv);
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

    $("#content > div").not($(".w-condition-invisible")).find("h2, h3").each(function (index) {

        // Add to observer
        observer.observe(this);

        // Setup ID
        let str = $(this).text();
        let id = generateIdBasedOnTitle(str);
        $(this).attr("id", id);

        // Setup new element
        const tocItem = $(document.createElement("a"));
        tocItem.html(str);
        tocItem.addClass("tocitem");


        // Set an additional subhead class for H3
        if ($(this).prop("nodeName") == "H3") {
            tocItem.addClass("subheader");
        }

        let hashTarget = "#" + id;

        // Assigns ID to href
        tocItem.attr("href", hashTarget);

        // Appends to table.
        tableContainer.append(tocItem);


        $(this).css("display", "flex");
        $(this).css("display", "row");
        addHashLinkDirect($(this), hashTarget)
    });
}

$(document).ready(buildTOC);
//$(document).ready(setupHashLinks);
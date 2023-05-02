
export var prepareCollectionListDataSource = function (dataSource) {
    var data = $(dataSource).find('script');

    var items = []; // place to store the pairs
    data.each(function (index, elem) { //loop over the keys
        items.push(elem.textContent);
    })

    var json = '[' + items.join() + ']';
    return JSON.parse(json);
}

let index = 0;
var db;

function setImgSrc() {
    $("#js-dynamic-image-id").attr("src", db[index % db.length].src);
    index++;
}

$(function () {
    db = prepareCollectionListDataSource("#product-img-source");
    setImgSrc();
    setInterval(setImgSrc, 250);
});
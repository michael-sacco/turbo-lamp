function convertUrl(originalUrl) {
    // Encode the original URL
    const encodedUrl = encodeURIComponent(originalUrl);
    // Replace special characters with their encoded counterparts
    const convertedUrl = encodedUrl.replace(/!/g, '%21')
        .replace(/\*/g, '%2A')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/'/g, '%27')
        .replace(/~/g, '%7E')
        .replace(/%20/g, '+');

    const targetUrlBase = "https://prf.hn/click/camref:1011lwgoj/pubref:website-product-page/[p_id:1100l485149]/destination:"

    // Return the converted URL
    return targetUrlBase + convertedUrl;
}

function ReplaceUrl($obj) {
    const originalUrl = $obj.attr("href");
    const convertedUrl = convertUrl(originalUrl);
    $obj.attr("href", convertedUrl);
}

const BUTTON_ID = "#purchase-link";
ReplaceUrl($(BUTTON_ID));
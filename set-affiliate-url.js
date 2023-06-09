
const _BASEURL = "https://prf.hn/click/";
const _WEBSITE_FULL = "[p_id:1100l485149]";
const _CAMREF_FULL = "camref:1011lwgoj";

const _PUBREF_KEY = "pubref:";
const _DEST_KEY = "destination:";


function getEncodedUrl(originalUrl) {
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

    return convertedUrl;
}

function buildUrl($obj, pubref) {
    const destination = convertUrl($obj.attr("href"));
    let urlConstructor = _BASEURL + _CAMREF_FULL + _PUBREF_KEY + pubref + _WEBSITE_FULL + _DEST_KEY + destination;
    $obj.attr("href", urlConstructor);
}
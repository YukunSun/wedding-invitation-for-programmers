import base62x from "base62x";

export default {
    getUrlKey: function (name) {
        // eslint-disable-next-line no-sparse-arrays
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    decodeBase62: function (encoded) {
        return base62x.decodeString(encoded)
    },
    encodeBase62: function (input) {
        return base62x.encode(input)
    }
}
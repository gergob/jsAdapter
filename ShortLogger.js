function ShortLogger(name) {
    var LOG_HEADER = '[' + name + ']';
    return {
        i: function i(message) {
            console.info(LOG_HEADER + '[INFO]: ' + message);
        },
        d: function d(message) {
            console.debug(LOG_HEADER + '[DEBG]: ' + message);
        },
        w: function w(message) {
            console.warn(LOG_HEADER + '[WARN]: ' + message);
        },
        e: function e(message) {
            console.error(LOG_HEADER + '[ERRO]:' + message);
        }
    }
}

module.exports = {
    getLogger: ShortLogger
}

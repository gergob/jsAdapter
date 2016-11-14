function BadLogger(name) {
    var LOG_HEADER = '[' + name + ']:';
    return {
        information: function information(message) {
            console.info(LOG_HEADER + message + '- INFORMATION' );
        },
        debg: function debg(message) {
            console.debug(LOG_HEADER + message + '- DEBG');
        },
        w: function w(message) {
            console.warn(LOG_HEADER + message + '- W' );
        },
        err: function err(message) {
            console.error(LOG_HEADER + message+ '- ERR' );
        }
    }
}

module.exports = {
    getLogger: BadLogger
}

function ShortLogger(name) {
    this.name = name;
    var LOG_HEADER = '[' + name + ']';
    var self = this;
    return {
        getName: function getName() {
            return self.name;
        },
        getType: function getType() {
            return 'ShortLogger';
        },
        i: function i(message) {
            console.info(LOG_HEADER + '[INFO]: ' + message);
        },
        d: function d(message) {
            console.log(LOG_HEADER + '[DEBG]: ' + message);
        },
        w: function w(message) {
            console.warn(LOG_HEADER + '[WARN]: ' + message);
        },
        e: function e(message) {
            console.error(LOG_HEADER + '[ERRO]: ' + message);
        }
    }
}

module.exports = {
    getLogger: ShortLogger
}

function ShortLogger(name) {
    this.name = name;
    var LOG_HEADER = '[' + name + ']';
    var self = this;
    var getTime = function() {
        return '[' + new Date().toISOString() + ']';
    }
    return {
        getName: function getName() {
            return self.name;
        },
        getType: function getType() {
            return 'ShortLogger';
        },
        i: function i(message) {
            console.info(LOG_HEADER + getTime() + '[I]: ' + message);
        },
        d: function d(message) {
            console.log(LOG_HEADER + getTime() + '[D]: ' + message);
        },
        w: function w(message) {
            console.warn(LOG_HEADER + getTime() + '[W]: ' + message);
        },
        e: function e(message) {
            console.error(LOG_HEADER + getTime() + '[E]: ' + message);
        }
    }
}

module.exports = {
    getLogger: ShortLogger
}

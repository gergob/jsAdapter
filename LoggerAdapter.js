var ShortLogger = require('./ShortLogger');
var BadLogger = require('./BadLogger');


function LoggerAdapter(loggerObj) {
    if (!loggerObj) {
        throw Error('Parameter [loggerObj] is not defined.');
    }
    console.log('[LoggerAdapter] is using Logger with name: ' + loggerObj.getName());
    var CONSTANTS = {
        DEBUG: 'DEBUG',
        WARNING: 'WARNING',
        INFORMATION: 'INFORMATION',
        ERROR: 'ERROR',
        BAD_LOGGER: 'BadLogger',
        SHORT_LOGGER: 'ShortLogger'
    };
    var loggerFunctionMapper = {};

    if(loggerObj.getType() === CONSTANTS.BAD_LOGGER) {
        loggerFunctionMapper[CONSTANTS.DEBUG] = loggerObj.debg;
        loggerFunctionMapper[CONSTANTS.INFORMATION] = loggerObj.information;
        loggerFunctionMapper[CONSTANTS.WARNING] = loggerObj.w;
        loggerFunctionMapper[CONSTANTS.ERROR] = loggerObj.err;
    }
    else if (loggerObj.getType() === CONSTANTS.SHORT_LOGGER) {
        loggerFunctionMapper[CONSTANTS.DEBUG] = loggerObj.d;
        loggerFunctionMapper[CONSTANTS.INFORMATION] = loggerObj.i;
        loggerFunctionMapper[CONSTANTS.WARNING] = loggerObj.w;
        loggerFunctionMapper[CONSTANTS.ERROR] = loggerObj.e;
    }

    function information(message) {
        try {
          loggerFunctionMapper[CONSTANTS.INFORMATION](message);
        }
        catch(err) {
            throw Error('No implementation for Logger: ' + loggerObj.toString());
        }
    };

    function debug(message) {
        try {
          loggerFunctionMapper[CONSTANTS.DEBUG](message);
        }
        catch(err) {
            throw Error('No implementation for Logger: ' + loggerObj.toString());
        }
    };

    function warning(message) {
        try {
          loggerFunctionMapper[CONSTANTS.WARNING](message);
        }
        catch(err) {
            throw Error('No implementation for Logger: ' + loggerObj.toString());
        }
    };

    function error(message) {
        try {
          loggerFunctionMapper[CONSTANTS.ERROR](message);
        }
        catch(err) {
            throw Error('No implementation for Logger: ' + loggerObj.toString());
        }
    };

    return {
        debug: debug,
        information: information,
        warning: warning,
        error: error
    }
}

module.exports = {
    LoggerAdapter: LoggerAdapter
}

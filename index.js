var ShortLogger = require('./ShortLogger');
var BadLogger = require('./BadLogger');
var LoggerAdapter = require('./LoggerAdapter');


var shortLog = ShortLogger.getLogger('ShortLoger');
shortLog.i('This is an information logged using an instance of short logger.');
shortLog.w('This is a warining logged using instance of short logger.');


var badLogger = BadLogger.getLogger('BadLogger');
badLogger.information('Info Log Entry with BadLogger');
badLogger.information('Error Log Entry with BadLogger');

console.log();

var loggerAdapter = LoggerAdapter.LoggerAdapter(badLogger);
loggerAdapter.information('This is logged through LoggerAdapter');
loggerAdapter.debug('This is logged through LoggerAdapter');
loggerAdapter.warning('This is logged through LoggerAdapter');
loggerAdapter.error('This is logged through LoggerAdapter');

console.log();

var loggerAdapter2 = LoggerAdapter.LoggerAdapter(shortLog);
loggerAdapter2.information('Now This is logged through LoggerAdapter');
loggerAdapter2.debug('Now This is logged through LoggerAdapter');
loggerAdapter2.warning('Now This is logged through LoggerAdapter');
loggerAdapter2.error('Now This is logged through LoggerAdapter');

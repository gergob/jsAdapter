var ShortLogger = require('./ShortLogger');

var shortLog = ShortLogger.getLogger('TestLoger');

shortLog.i('This is an information logged using an instance of short logger.');
shortLog.w('This is a warining logged using instance of short logger.');

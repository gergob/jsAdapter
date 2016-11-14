var ShortLogger = require('./ShortLogger');
var BadLogger = require('./BadLogger');

var shortLog = ShortLogger.getLogger('ShortLoger');
shortLog.i('This is an information logged using an instance of short logger.');
shortLog.w('This is a warining logged using instance of short logger.');


var badLogger = BadLogger.getLogger('BadLogger');
badLogger.information('Info Log Entry with BadLogger');
badLogger.information('Error Log Entry with BadLogger');

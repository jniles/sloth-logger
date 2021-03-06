let test = require('tape');
let SlothLogger = require('../index.js');

test('Set Log Level at runtime', (t) => {
    t.plan(1);
    let logger = new SlothLogger.Logger();
    logger.logLevel = 2;
    t.ok(logger.logLevel === 2, 'Correctly set log level at runtime')
});

test('Set Log Level at initialization', (t) => {
    t.plan(1);
    let logger = new SlothLogger.Logger({
        logLevel: 3
    });
    t.ok(logger.logLevel === 3, 'Correctly set log level at initialization')
});

test('Add custom log level at initialization', (t) => {
    t.plan(1);
    let logger = new SlothLogger.Logger({
        levels: {
            crit: {
                color: 'blue'
            }
        }
    });
    t.ok(logger.crit instanceof Function, 'Correctly added custom loger at initialization')   
})
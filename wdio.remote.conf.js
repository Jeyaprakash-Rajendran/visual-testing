const { join } = require('path');

const drivers = {
    chrome: { version: '86.0.4240.22' }, // https://chromedriver.chromium.org/
    firefox: { version: '0.27.0' }, // https://github.com/mozilla/geckodriver/releases
    chromiumedge: { version: '85.0.564.70' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}


exports.config = {

    runner: 'local',
    hostname: 'selenium-hub',
    port: 4444,
    path: '/',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        './test/specs/SaveBaseLine.js'
    ],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.volvocars.com/intl/v/car-safety/a-million-more',
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [['image-comparison',
        {
            baselineFolder: join(process.cwd(), './expected/'),
            formatImageName: '{tag}',
            screenshotPath: join(process.cwd(), './'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            isHybridApp: true,
            tabbableOptions: {
                circle: {
                    size: 18,
                    fontSize: 18,
                },
                line: {
                    color: '#ff221a',
                    width: 3,
                },
            }
        }]],

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://selenium-hub:4444',
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
}

const { join } = require('path');

const drivers = {
    chrome: { version: '87.0.4280.20' },
    firefox: { version: '0.29.0' }
}

exports.config = {

    runner: 'local',
    hostname: 'localhost',
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
        'goog:chromeOptions': {
            args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
       },
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        "moz:firefoxOptions":{
            args:["-headless"]
          },
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.volvocars.com/intl/v/car-safety/a-million-more',
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [['selenium-standalone', {
        logPath: 'logs',
        installArgs: { drivers },
        args: { drivers }
     }], 'docker',['image-comparison',
        {
            baselineFolder: join(process.cwd(), './expected/'),
            formatImageName: '{tag}',
            screenshotPath: join(process.cwd(), './'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            isHybridApp: true,
            disableCSSAnimation: true,
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

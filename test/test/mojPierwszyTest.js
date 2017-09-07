var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.pajacyk.pl/#index/')
    .submitForm('#paj-click')
    })
    .end();	
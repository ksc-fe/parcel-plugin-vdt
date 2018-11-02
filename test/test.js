const Bundler = require('parcel-bundler');
const VdtPlugin = require('../index');

const bundler = new Bundler('./test/index.html', {
    watch: true,
    cache: false,
});

VdtPlugin(bundler);

bundler.serve();

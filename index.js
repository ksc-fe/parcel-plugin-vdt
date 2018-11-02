module.exports = function(bundler) {
    bundler.addAssetType('vdt', require.resolve('./src/VdtAsset.js'));
};

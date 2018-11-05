const JSAsset = require('parcel-bundler/src/assets/JSAsset');

let Vdt;
try {
    // use Intact.Vdt primarily if exist
    Vdt = require('intact').Vdt;
} catch (e) {
    Vdt = require('vdt');
} finally {
    console.error('You must install vdt or intact. Please run: npm install intact.');
}

class VdtAsset extends JSAsset {
    async loadIfNeeded() {
        if (this.contents == null) {
            const options = Object.assign({
                noWith: true, 
                onlySource: true, 
                delimiters: ['{', '}'],
                sourceMap: false,
                // sourceMap: this.sourceMap
            });

            let contents = await this.load();
            const fn = Vdt.compile(contents, options);
            const head = fn.head || '';
            contents = 'export default ' + fn.source;
            if (head) {
                contents = head + contents;
            }

            this.contents = contents;
        }
    }
}

module.exports = VdtAsset;

const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const {Asset} = require('parcel-bundler');

let Vdt;
try {
    // use Intact.Vdt primarily if exist
    Vdt = require('intact').Vdt;
} catch (e) {
    Vdt = require('vdt');
}

class VdtAsset extends JSAsset {
    // constructor(...args) {
        // super(...args);
        // this.type = 'js';
    // }

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

    // async parse(code) {

        // return await super.parse(content); 
    // }

    // async generate() {
        // console.log(this.ast);

        // // const options = Object.assign({
            // // noWith: true, 
            // // onlySource: true, 
            // // delimiters: ['{', '}'],
            // // sourceMap: false,
            // // // sourceMap: this.sourceMap
        // // });


        // // const fn = Vdt.compile(this.contents, options);
        // // const head = fn.head || '';
        // // let content = 'export default ' + fn.source;
        // // if (head) {
            // // content = head + content;
        // // }

        // return [{
            // type: 'js',
            // value: content 
        // }];
    // }
}

module.exports = VdtAsset;

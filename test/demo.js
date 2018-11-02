import Intact from 'intact';
import template from './index.vdt';
import {Message} from 'kpc';

export default class Demo extends Intact {
    @Intact.template()
    static template = template;

    _onClick() {
        Message.success('Hello world!');
    }
}

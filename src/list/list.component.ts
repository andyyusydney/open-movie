let template = require('./list.html');
import listController from './list.controller';

export default {
    template: template,
    controller: listController,
    bindings: {
        itemsList: '<'
    }
};
let template = require('./card.html');
import cardController from './card.controller';

export default {
    template: template,
    controller: cardController,
    bindings: {
        id: '<'
    }
};
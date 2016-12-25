import {IDetailsService} from '../services/details.service';

class CardController implements ng.IComponentController {
    private id: string;
    private shortData: any;

    constructor(detailsService: IDetailsService) {
        console.log('card controller');
        console.log("this.id=", this.id);
        detailsService.searchByIMDbID(this.id, 'short').then((result) => {
            console.log("shortData = ", result.data);
            this.shortData = result.data;
        });
    }
}

export default CardController;
CardController.$inject = ['detailsService'];
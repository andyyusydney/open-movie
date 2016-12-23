import {IDetailsService} from './details.service';

class DetailsController implements ng.IComponentController {
    private detailsService: IDetailsService;
    private detailsData: any;

    constructor($stateParams: any, detailsService: IDetailsService) {
        console.log('details controller');
        console.log("$stateParams.id=", $stateParams.id);
        let id = $stateParams.id;
        detailsService.searchByIMDbID(id).then((result) => {
            console.log("detailsData = ", result.data);
            this.detailsData = result.data;
        });
    }
}

export default DetailsController;
DetailsController.$inject = ['$stateParams', 'detailsService'];

class HomeController implements ng.IComponentController {
    private $state;

    constructor($state) {
        console.log('home controller');
        this.$state = $state;
    }

    private goBack = () => {
        this.$state.go('^');
    }
}

export default HomeController;
HomeController.$inject = ['$state'];

(
    () => {
        'use strict'
        angular.module('practise.app')
            .controller('getWordHello', getWordHello);

        function getWordHello() {
            var vm = this;
            vm.name = "hello";
        }

    }
)();
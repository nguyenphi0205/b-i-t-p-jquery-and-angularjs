(
    () => {
        'use strict';
        angular.module('practise.app')
            .controller('HelloController', helloCotroller);

         function helloCotroller(){
             var vm=this;
             vm.name='hello';
         }

    }
)();    
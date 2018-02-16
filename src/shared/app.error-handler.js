angular.module('shoppingcart')
    .decorator('$exceptionHandler', ['$delegate', function($delegate){
        console.log($delegate);
    }])
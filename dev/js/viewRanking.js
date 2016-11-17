(function( QuizFPU ) {
    'use strict';

    QuizFPU.viewRanking = function() {
        function reloadPage() {
            setTimeout(function() {
                location.reload();
            }, 10000);
        }

        function init() {
            reloadPage();
        }

        init();
    };
    
}( window.QuizFPU ));

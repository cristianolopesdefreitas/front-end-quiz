(function( QuizFPU ) {
    'use strict';

    function getDataControl() {
        var $element = $( '[data-control]' );

        if ( $element.length ) {
            QuizFPU[ $element.attr( 'data-control' ) ]();
        }
    }

    $(function() {
        getDataControl();
    });

}( window.QuizFPU ));

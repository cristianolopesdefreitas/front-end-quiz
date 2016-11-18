(function( QuizFPU ) {
    'use strict';

    function getDataControl() {
        var $element = $( '[data-control]' ),
            control = null;

        if ( $element.length ) {
            control = $element.attr( 'data-control' );

            if ( QuizFPU.hasOwnProperty( control ) ) {
                QuizFPU[ control ]();
            }
        }
    }

    $(function() {
        getDataControl();
    });

}( window.QuizFPU ));

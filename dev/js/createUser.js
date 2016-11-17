(function( QuizFPU ) {
    'use strict';

    QuizFPU.createUser = function() {
        function validateForm() {
            $( '#create-user-form' ).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: {
                        required: 'Não se esqueça de informar seu nome.',
                        minlength: 'Informe um nome com pelo menos 5 letras.'
                    }
                }
            });
        }

        function init() {
            QuizFPU.utils.formValidateSettings();
            validateForm();
        }

        init();
    };

}( window.QuizFPU ));

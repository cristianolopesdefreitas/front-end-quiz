(function( QuizFPU ) {
    'use strict';

    QuizFPU.admistrationLogin = function() {
        function validateForm() {
            $( '#administration-login-form' ).validate({
                rules: {
                    user: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    user: {
                        required: 'Não se esqueça de informar seu usuário.'
                    },
                    password: {
                        required: 'Não se esqueça de informar sua senha.'
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

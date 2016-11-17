(function( QuizFPU ) {
    'use strict';

    QuizFPU.answerQuestion = function() {
        function validateForm() {
            $( '#answer-question-form' ).validate({
                rules: {
                    answerOption: 'required'
                },
                messages: {
                    answerOption: 'Você precisa escolher uma das alternativas.'
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

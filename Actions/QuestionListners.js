var QuestionListner =(function($){
    function registerListners(){
        $("#addButton").on("click",QuestionHandlers.handleAddQuestionClick);
        $("#cancelButton").on("click",QuestionHandlers.handleCancelQuestion);
        $("#saveButton").on("click",QuestionHandlers.handleSaveQuestion);
        $("#signup").on("click",QuestionHandlers.handleSignUpViewVisit);
        $("#login").on("click",QuestionHandlers.handleLoginViewVisit);
        $("#loginLink").on("click",QuestionHandlers.handleLoginViewVisit);
        $("#signUpLink").on("click",QuestionHandlers.handleSignUpViewVisit);
    }
    return {
        registerListners :registerListners
    };
})(jQuery);
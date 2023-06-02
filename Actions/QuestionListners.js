var QuestionListner =(function($){
    function registerListners(){
        $("#addButton").on("click",QuestionHandlers.handleAddQuestionClick);
        $("#cancelButton").on("click",QuestionHandlers.handleCancelQuestion);
        $("#saveButton").on("click",QuestionHandlers.handleSaveQuestion);
    }
    return {
        registerListners :registerListners
    };
})(jQuery);
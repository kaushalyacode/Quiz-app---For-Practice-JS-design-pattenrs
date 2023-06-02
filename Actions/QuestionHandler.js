var QuestionHandlers = (function(){
    var $addButton;
    var $cancelButton;
    var $saveButton; 
    var $quizCard;

    function _init(){
        $addButton= $('#addButton');
        $cancelButton = $('#cancelButton'); 
        $saveButton = $('#saveButton'); 
        $quizCard = $('#QuizCard');  
    }
    function handleAddQuestionClick(){
        _init();
        $quizCard.show();
        $addButton.hide();
        $cancelButton.show();
        $saveButton.show();
    }
    function handleCancelQuestion(){
        $quizCard.hide();
        $addButton.show();
        $cancelButton.hide();
        $saveButton.hide();
    }
    function handleSaveQuestion(){
       setTimeout(()=>{alert('tester');},5000);
    }
    return {
        handleAddQuestionClick,
        handleCancelQuestion,
        handleSaveQuestion
    };
  
})();

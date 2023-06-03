var QuestionHandlers = (function(){
   
    var $addButton;
    var $cancelButton;
    var $saveButton; 
    var $quizCard;
    var $buttonView;
    var $signUpArea;
    var $signInArea;
    var isInitialized = false;

    function _init(){
        if (!isInitialized) {
            $addButton = $('#addButton');
            $signUpArea =$('#signUpArea');
            $cancelButton = $('#cancelButton'); 
            $saveButton = $('#saveButton'); 
            $quizCard = $('#QuizCard');  
            $buttonView = $('#ButtonView');
            $signInArea =$('#signInArea');
            isInitialized = true;
        }
    }

    function handleAddQuestionClick(){
        _init();
        $quizCard.show();
        $addButton.hide();
        $cancelButton.show();
        $saveButton.show();
    }
    function handleCancelQuestion(){
        _init();
        $quizCard.hide();
        $addButton.show();
        $cancelButton.hide();
        $saveButton.hide();
    }
    function handleSaveQuestion(){
       setTimeout(()=>{alert('tester');},5000);
    }
    function handleSignUpViewVisit(){
        _init();
        $buttonView.hide();
        $signUpArea.show();
        $signInArea.hide();
        $quizCard.hide();
    }
    function handleLoginViewVisit(){
        _init();
        $buttonView.hide();
        $quizCard.hide();
        $signUpArea.hide();
        $signInArea.show();
    }
    return {
        handleAddQuestionClick,
        handleCancelQuestion,
        handleSaveQuestion,
        handleSignUpViewVisit,
        handleLoginViewVisit
    };
  
})();

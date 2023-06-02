$(function() {
    var QuestionAction = {
        init : function() {
            this.cashDom();
            this.visualizeButtons();
            this.$quizCard.hide();
            this.registerListners();
        },
        cashDom : function() {
            this.$quizCard = $('#QuizCard');
            this.$cancelButton = $('#cancelButton'); 
            this.$saveButton = $('#saveButton');         
        },
        visualizeButtons : function(){
            this.$saveButton.hide();
            this.$cancelButton.hide(); 
        },
        registerListners : function(){
            QuestionListner.registerListners();
        },        
    }
    QuestionAction.init();
});
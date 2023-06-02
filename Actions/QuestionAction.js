$(function() {
    var QuestionAction = {
        init : function() {
            this.cashDom();
            this.visualizeButtons();
            this.$quizCard.hide();
        },
        cashDom : function() {
            this.$quizCard = $('#QuizCard');
            this.$cancelButton = $('#cancelButton'); 
            this.$saveButton = $('#saveButton');         
        },
        visualizeButtons : function(){
            this.$saveButton.hide();
            this.$cancelButton.hide(); 
        }
        
    }
    QuestionAction.init();
});
$(function() {
    var QuestionAction = {
        init : function() {
            this.cashDom();
            this.initialeComponentVisualization();           
            this.registerListners();
        },
        cashDom : function() {
            this.$quizCard = $('#QuizCard');
            this.$cancelButton = $('#cancelButton'); 
            this.$saveButton = $('#saveButton');  
            this.$signUpArea = $('#signUpArea');
            this.$signInArea = $('#signInArea');       
        },
        initialeComponentVisualization : function(){
            this.$saveButton.hide();
            this.$cancelButton.hide(); 
            this.$quizCard.hide();
            this.$signUpArea.hide();
            this.$signInArea.hide();
        },
        registerListners : function(){
            QuestionListner.registerListners();
        },        
    }
    QuestionAction.init();
});
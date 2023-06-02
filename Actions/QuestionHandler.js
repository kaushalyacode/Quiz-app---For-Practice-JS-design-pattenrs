var $addButton = $('#addButton');
var $saveButton = $('#saveButton');
var $cancelButton = $('#cancelButton');

const handleAddQuestionClick = () => {
    $addButton.hide();
    $cancelButton.show();
    $saveButton.show();
  };
  
  export { handleAddQuestionClick };
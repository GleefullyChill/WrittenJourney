
//Error function, easy to call and can be manipulated to change what it's attached to
//simply call errorEvent with an HTML error message as it's parameter
//just make sure to add a '.error-container' class before calling


$(() => {

  const errorEvent = function($errorMessage, $errorOrigin) {

    //build the error HTML
    const $errorText = $('<h2>Error! </h2>');
    const $errorBox = $('<div>').addClass("error");
    const $errorContainer = $('.error-container');
    $errorBox.append($errorText, $errorMessage);

    //attach the error box and slide it into view
    $errorBox.appendTo($errorContainer).hide().slideDown();

    //add a handle to use when removing the message
    $errorContainer.addClass("errorNow");
    $errorOrigin.append($errorContainer);
    setTimeout((()=>{
      $errorOrigin.remove($errorContainer);
    }), 4000)
  };
})

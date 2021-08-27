



// when submit button is hit, send the data to the database table story, empty the form and hide the form
const createStorySubmit = function() {
  $(() => {
    const $createStoryform = $(".create-story");
    $createStoryform.on('submit', function (event) {

      event.preventDefault();
      // when the form is submitted, serialize the input
      const urlEncodedData = $(this).serialize();

      // post the serialized data to the database, then fire the renderTitles func to load all the titles to the page
      // app.js ajax
      postStory(urlEncodedData);

      // after hitting submit button, textarea reset to null
      const $newPostTitle = $('#title');
      $newPostTitle.val('')
      const $newPostAbstract = $('#abstract');
      $newPostAbstract.val('')
      // after submission, hide the creation form
      $createStoryform.hide()
    })
  })
};

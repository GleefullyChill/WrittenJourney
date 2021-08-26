


// when submit button is hit, send the data to the database contribution story, empty the form and render the story
const submitContributionListener = function() {
  $(() => {
    const $createContributionform = $(".create-contribution");
    $createContributionform.on('submit', function (event) {
      // this prevents html to defaultly post to another page
      event.preventDefault();
      const serializedStoryId = $(this).attr("value");
      const $textarea = $(this).find(`[value="${serializedStoryId}"]`);
      // when the form is submitted, serialize the input
      const content = $textarea.val();
      const serializedData = `content=${content}&${serializedStoryId}`

      $textarea.empty()
      // post the serialized data to the database, then fire the renderTitles func to load all the titles to the page
      $.post(`/${serializedStoryId}/contribute`, serializedData).then(loadStory(serializedStoryId))
      // after hitting submit button, textarea reset to null
      // Do we need  to const again or just use it?


      // after submission, hide the creation form
      $(this).hide()
    })
  })
};

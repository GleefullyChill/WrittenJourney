


// when submit button is hit, send the data to the database contribution story, empty the form and render the story
const submitContributionListener = function() {
  $(() => {
    const $createContributionform = $(".create-contribution");
    $createContributionform.on('submit', function (event) {
      // this prevents html to defaultly post to another page
      event.preventDefault();
      // when the form is submitted, serialize the input
      const serializedData = $(this).serialize();
      console.log("data: ", serializedData)
      const $content = $("#content");
      $content.empty()
      // post the serialized data to the database, then fire the renderTitles func to load all the titles to the page
      $.post('/:story/contribute', serializedData).then(loadStory(serializedData))
      // after hitting submit button, textarea reset to null
      // Do we need  to const again or just use it?


      // after submission, hide the creation form
      $(this).hide()
      console.log(serializedData)
      loadStory(serializedData)
    })
  })
};

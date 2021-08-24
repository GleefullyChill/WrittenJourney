// when submit button is hit, send the data to the database contribution story, empty the form and render the story

$(() => {
  const $createContributionform = $("#create-contribution");
  $createContributionform.on('submit', function (data) {
    // this prevents html to defaultly post to another page
    event.preventDefault();
    // when the form is submitted, serialize the input
    const serializedData = $(this).serialize();
    // post the serialized data to the database, then fire the renderTitles func to load all the titles to the page
    $.post('/:story/contribute', serializedData)
    // after hitting submit button, textarea reset to null
    // Do we need  to const again or just use it?
    const $username = $("#userName");
    $username.val('')
    const $content = $("#content");
    $content.val('')

    // after submission, hide the creation form
    $createContributionform.hide()
    renderStory()
  })
})

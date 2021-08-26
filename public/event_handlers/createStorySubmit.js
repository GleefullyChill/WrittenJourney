// when submit button is hit, send the data to the database table story, empty the form and hide the form

$(() => {
  const $createStoryform = $(".create-story");
  $createStoryform.on('submit', function (event) {
    // this prevents html to defaultly post to another page
    event.preventDefault();
    // when the form is submitted, serialize the input
    const serializedData = $(this).serialize();
    // post the serialized data to the database, then fire the renderTitles func to load all the titles to the page
    $.post('/create', serializedData)
    .then( (data) =>{
      loadTitles()
      // res.redirect ('/')

      // renderTitles(data)
      // should be add title
    })
    // after hitting submit button, textarea reset to null
    const $newPostAuthor = $('#author');
    $newPostAuthor.val('')
    const $newPostTitle = $('#title');
    $newPostTitle.val('')
    const $newPostAbstract = $('#abstract');
    $newPostAbstract.val('')
    // after submission, hide the creation form
    $createStoryform.hide()
  })
})

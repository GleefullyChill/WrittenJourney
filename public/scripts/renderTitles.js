
//called in loadTitles (app.js)

//const story = require("../../routes/story");



const renderTitles = function(titles) {
  $(() => {



    const $renderTitles = $('.render-titles');
    $renderTitles.empty();

    for (const title of titles) {
      const $title = createTitleElement(title)
      $renderTitles.prepend($title);
    }

    const $renderStoryButton = $('.render-story-button')


    $renderStoryButton.on('click', function() {

      $(this).unbind('click');
      $('.active-story').removeClass("active-story");

      $(this).addClass('active-story')

      const storyId = $(this).parent().find(".story-id").val()
      const serializedData = `story_id=${storyId}`;

      $.get('/api/:story', serializedData)

        .then(loadTitles(serializedData))

        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  })
}
// module.exports = ( { renderTitles })

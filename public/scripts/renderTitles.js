
//called in loadTitles (app.js)

//const story = require("../../routes/story");



const renderTitles = function(titles) {
  $(() => {



    const $renderTitles = $('.render-titles');
    $renderTitles.empty();

    for (const title of titles) {
      const $title = createTitleElement(title)
      $renderTitles.append($title);
    }

    const $renderStoryButton = $('.render-story-button')


    $renderStoryButton.on('click', function() {

      //reset other titles classes to avoid entire story from being a button
      const $currentActiveTitle = $('.active-story')
      $currentActiveTitle.addClass('.render-story-button')
      $(this).removeClass('.render-story-button')
      $currentActiveTitle.removeClass('active-story');

      $(this).addClass('active-story')

      const storyId = $(this).parent().find(".story-id").val()
      const serializedData = `story_id=${storyId}`;

      $.get('/api/:story', serializedData)

        .then(() => {
          $.get(`/api/story?${serializedData}`, (response) => {
           renderStory(response);
          })
        })

        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  })
}
// module.exports = ( { renderTitles })

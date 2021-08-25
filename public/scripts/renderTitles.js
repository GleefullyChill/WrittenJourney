
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
      $('.active-story').removeClass("active-story");

      $(this).addClass('active-story')

      const storyId = $(this).parent().find(".story-id").val()
      console.log(storyId)
      const serializedData = `story_id=${storyId}`;
      console.log(serializedData)
      $.get('/:story', serializedData)//.then(data => renderStory(data))
      // renderStory('crystal','Luke');
    });
  })
}
// module.exports = ( { renderTitles })

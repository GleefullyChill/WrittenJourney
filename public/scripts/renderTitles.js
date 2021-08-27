
//called in loadTitles (app.js)

//const story = require("../../routes/story");



const renderTitles = function(titles) {
  $(() => {

    const $renderTitles = $('.render-titles');
    $renderTitles.empty();

    for (const title of titles) {
      const $title = createTitleElement(title)
      $renderTitles.prepend($title);

      //add a listener for each story
      const storyId = title.story_id;
      renderStoryButton(storyId)
    }

  })
}
// module.exports = ( { renderTitles })

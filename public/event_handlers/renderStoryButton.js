
//called in after renderTitles.js runs


const renderStoryButton = function(storyId) {
  $(() => {
    const $renderStoryButton = $(`#expand-story-${storyId}`)
    $renderStoryButton.on('click', function() {

      $(this).unbind('click');

      //reset other titles classes to avoid entire story from being a button
      const $currentActiveTitle = $('.active-story')
      $currentActiveTitle.removeClass('active-story');

      //For future use: can have the active story styled differently
      $(this).addClass('active-story')

      const storyId = $(this).parent().parent().find(".story-id").val()
      const urlEncodedData = `story_id=${storyId}`;

      //app.js ajax call
      loadStory(urlEncodedData);
    });
  })
}

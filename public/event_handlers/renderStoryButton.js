
//called in after renderTitles.js runs


const renderStoryButton = function(storyId) {
  $(() => {
    const $renderStoryButton = $(`#expand-story-${storyId}`)
    $renderStoryButton.on('click', function() {

      $(this).unbind('click');

      //reset other titles classes to avoid entire story from being a button
      const $currentActiveTitle = $('.active-story')
      $currentActiveTitle.removeClass('active-story');


      $(this).addClass('active-story')

      const storyId = $(this).parent().parent().find(".story-id").val()
      const serializedData = `story_id=${storyId}`;
      $.get('/api/:story', serializedData)

        .then(loadStory(serializedData))

        .catch(err => {
          console.log(500, "error in renderStory")
        });
    });
  })
}

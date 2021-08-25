
//called in loadTitles (app.js)



const renderTitles = function(titles) {
  $(() => {



    const $renderTitles = $('.render-titles');
    $renderTitles.empty();

    for (const title of titles) {
      const $title = createTitleElement(title)
      $renderTitles.append($title);
    }

    const $renderStoryButton = $('.render-story-button')


    $renderStoryButton.on('click', () => {
      $('.active-story').removeClass("active-story");

      $(this).addClass('active-story')
      const storyId = $(this).find('.story-id').html();
      console.log(storyId);
      renderStory('crytal','Luke');
    });
  })
}
// module.exports = ( { renderTitles })

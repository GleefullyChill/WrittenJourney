
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

      const storyId = $('.active-story').closest('output')
      console.log($(storyId));
      renderStory('crystal','Luke');
    });
  })
}
// module.exports = ( { renderTitles })

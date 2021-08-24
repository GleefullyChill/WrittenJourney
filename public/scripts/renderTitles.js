
//called in loadTitles (app.js)


$(() => {

  const renderTitles = function(titles) {
    $renderTitles = $(`.render-titles`);
    $renderTitles.empty();

    for (const title of titles) {
      $title = createTitleElement(title);
      $renderTitles.append($title);
    }

  }
})

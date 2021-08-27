
//called in renderTitles.js and createStorySubmit.js

const createTitleElement = function(title) {

  const storyId = title.story_id;

  const $username = $(`<div class='abstracts'>`).text(title.username);
  const $titleText = $(`<h2 class='titles abstracts'>`).text(title.title);
  // const $abstract = $('<p class="abstracts>').text(title.abstract)
  const $storyButton = $(`<p id="expand-story-${storyId}">`).text('Expand!').addClass("render-story-button");
  const $abstract = $(`<p class="story-container">`).text(title.abstract).append($storyButton)
  const $storyId = $(`<output class="story-id" value="${storyId}">`).val(storyId)


  let $status;
  if (title.completed === true) {
    $status = $(`<div class="completion-status">${'Complete!'}</div>`);
  } else {
    $status = $(`<div class="completion-status">${'In Progress'}</div>`);
  }


  const $title = $(`<section class="title">`).append($storyId).prepend(
    $titleText,
    $username,
    $status,
    $abstract
  );
  return $title;
};

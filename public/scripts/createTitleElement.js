
//called in renderTitles.js and createStorySubmit.js

const createTitleElement = function(title) {

  const $username = $(`<div>`).text(title.username);
  const $titleText = $(`<h3>`).text(title.title);
  const $abstract = $(`<p>`).text(title.abstract);
  const $storyId = $(`<output class="story-id">`).val(title.story_id)
  let $complete;
  if (title.complete === true) {
    $complete = $(`<div>${'Complete!'}</div>`);
  } else {
    $complete = $(`<div>${'In Progress'}</div>`);
  }
  $titleText.addClass("render-story-button")

  const $title = $(`<section class="title">`).append($storyId).append(
    $titleText,
    $abstract,
    $username,
    $complete
  )
  return $title
};

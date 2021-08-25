
//called in renderTitles.js and createStorySubmit.js

const createTitleElement = function(title) {

  const storyId = title.story_id;
  const $username = $(`<div>`).text(title.username);
  const $titleText = $(`<h3>`).text(title.title);
  const $storyButton = $(`<p>`).text('Expand!').addClass("render-story-button");
  const $abstract = $(`<p>`).text(title.abstract).append($storyButton)

  const $storyId = $(`<output class="story-id" value="${storyId}">`).val(storyId)

  let $complete;
  if (title.complete === true) {
    $complete = $(`<div>${'Complete!'}</div>`);
  } else {
    $complete = $(`<div>${'In Progress'}</div>`);
  }


  const $title = $(`<section class="title">`).append($storyId).prepend(
    $titleText,
    $username,
    $complete,
    $abstract
  )
  return $title
};


//called in renderTitles.js and createStorySubmit.js

const createTitleElement = function(title) {
  console.log("createTitleElement")
  const storyId = title.story_id;
  const $username = $(`<div>`).text(title.username);
  const $titleText = $(`<h3>`).text(title.title);
  const $storyButton = $(`<p id="expand-story-${storyId}">`).text('Expand!').addClass("render-story-button");
  const $abstract = $(`<p>`).text(title.abstract).append($storyButton);

  const $storyId = $(`<output class="story-id" value="${storyId}">`).val(storyId);

  let $status;
  if (title.completed === true) {
    $status = $(`<div>${'Complete!'}</div>`);
  } else {
    $status = $(`<div>${'In Progress'}</div>`);
  }


  const $title = $(`<section class="title">`).append($storyId).prepend(
    $titleText,
    $username,
    $status,
    $abstract
  );
  return $title;
};

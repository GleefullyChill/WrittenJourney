
//called by renderStory to create an element made from the information passed to it
//also called when a new story is submitted?

const createStoryElement = function(storyInfo) {

  let story;
  const storyDate = timeago.format(storyInfo[0].date);
  $date = $(`<div>`).text(storyDate);

  if (storyInfo[0].content) {
    //this will put the data into a manageble form for turning into HTML
    for (const contribution of storyInfo) {
      story += `${contribution.content}\n`;
    }
    $content = $(`<p>`).text(story);
    //this format will allow us to easier change the end look by adding more html elements
    $story = $(`<section class="visible rendered story">`).append(
        $date,
        $content
    );
    return $story;
  }
   return $(`<section class="no-story-yet>"`).append($date);
};

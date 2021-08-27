

//called during a renderStory function when the owner of that story is the logged in user

const markCompleteButton = function(storyId) {
  $(() => {

    const $markComplete = $(`#mark-complete-${storyId}`);

    $markComplete.on("click", function() {

      const storyId = $(this).attr("value");
      const urlEncodedData = `story_id=${storyId}`;
      //app.js ajax call
      changeComplete(urlEncodedData).then(loadTitles);
    })
  })
}

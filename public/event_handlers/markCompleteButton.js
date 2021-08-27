const markCompleteButton = function(storyId) {
  $(() => {
    const $markComplete = $(`#mark-complete-${storyId}`);
    $markComplete.on("click", function() {
      const storyId = $(this).attr("value");
      const serializedData = `story_id=${storyId}`;
      changeComplete(serializedData);
    })

  })
}

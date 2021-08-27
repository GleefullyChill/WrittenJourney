



const upvoteButton = function(id) {
  $(() => {

    const $upvoteButton = $(`#upvote-${id}`);
    $upvoteButton.on("click", function(event) {
      const contributionId = $(this).attr("value")
      const serializedData = `contribution_id=${contributionId}`

      getUpvoteInfo(serializedData);
    })

  })
}




const upvoteButton = function() {
  $(() => {
    const $upvoteButton = $(".upvote");
    $upvoteButton.on("click", function(event) {
      const contributionId = $(this).parent().find(".contribution-content").attr("value")
      const serializedData = `contribution_id=${contributionId}`
      getUpvoteInfo(serializedData);
    })

  })
}

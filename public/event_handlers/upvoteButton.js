



const upvoteButton = function(id) {
  $(() => {

    const $upvoteButton = $(`#upvote-${id}`);
    $upvoteButton.on("click", function(event) {

       $upvoteButton.addClass('liked');


      const contributionId = $(this).attr("value")

      const urlEncodedData = `contribution_id=${contributionId}`

      getUpvoteInfo(urlEncodedData);
    })

  })
}

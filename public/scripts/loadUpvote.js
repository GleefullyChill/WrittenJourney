const initialUpvoteInfo = (data) => {
  $(() => {
    const voteStatus = data[0];
    const voteCountNum = data[1];
    const contributionId = data[2];
    const $upvote = $(`#upvote-${contributionId}`);
    const $upvoteNum = $(`#upvote-count-${contributionId}`);
    $upvoteNum.empty();
    $upvoteNum.html(voteCountNum)
    if (voteStatus) {
      $upvote.addClass('red');
    }
  })
}

const changeUpvoteResponse = function(statusArray) {
  $(() => {

    // dissect the statusArray
    let count = statusArray[1];
    let bool = statusArray[0];
    const contributionId = statusArray[2];

    // jQuery
    const $upvote = $(`#upvote-${contributionId}`);
    const $upvoteNum = $(`#upvote-count-${contributionId}`);

    // two routes, POST or PATCH
    if (bool === "undefined") {

      const urlEncodedData = `contribution_id=${contributionId}`;
      // app.js ajzax call
      postUpvote(urlEncodedData);
      // adjust count and change HTML
      $upvote.addClass('liked');
      count ++;
      $upvoteNum.empty();
      $upvoteNum.html(count);
    }
     else {
       console.log(bool)
      // adjust variables
      if (bool === true) {
        count--;
        $upvote.removeClass('liked');
        bool = false;
      } else {
        count++;
        $upvote.addClass('liked');
        bool = true
      }

      // changes to HTML
      $upvoteNum.empty();
      $upvoteNum.html(count);

      const urlEncodedData = `status=${bool}&contribution_id=${contributionId}`;
      // app.js azax call
      editVoteStatus(urlEncodedData, contributionId);
    }
})
}

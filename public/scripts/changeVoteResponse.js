const changeUpvoteResponse = function(status) {
  $(() => {
    const count = status[1];
    const bool = status[0];
    const contributionId = status[2];
    const $upvote = $(`#upvote-${contributionId}`);
    const $upvoteNum = $(`#upvote-count-${contributionId}`);

    if (bool === undefined) {
      const serializedData = `contribution_id=contribution`;
      $.post("/upvote", serializedData)
      $upvote.addClass('red');
      count ++;
      $upvoteNum.empty();
      $upvoteNum.html(count);
      return;
    }
    if (bool === true) {
      const serializedData = `status=false&contribution_id=${contributionId}`;
      $.ajax({
        type: "PATCH",
        url: `/edit/${contributionId}`,
        data: serializedData
      });
        $upvote.addClass('red')
        count++;
        $upvoteNum.empty();
        $upvoteNum.html(count);
        return;
      }
      if (bool === false) {
        const serializedData = `status=true&contribution_id=${contributionId}`;
        $.ajax({
          type: "PATCH",
          url: `/edit/${contributionId}`,
          data: serializedData
        });
          $upvote.removeClass('red')
          count--;
          $upvoteNum.empty();
          $upvoteNum.html(count);
          return;
        }
})
}

const changeUpvoteResponse = function(status) {
  $(() => {
    const count = status[1];
    const bool = status[0];
    const contributionId = status[2];
    const $upvote = $(`.upvote`);
    const $upvoteNum = $(`.upvote-count`);

    if (bool === undefined) {
      const serializedData = `contribution_id=contribution`;
      $.post("/upvote", serializedData)
      $upvote.addClass('red');
      count ++;
      $upvoteNum.val(count);
      return;
    }
    if (bool === true) {
      const serializedData = `status=false&contribution_id=${contributionId}`;
      $.ajax({
        type: "PATCH",
        url: "/api/upvote",
        data: serializedData
      });
        $upvote.addClass('red')
        count++;
        $upvoteNum.val(count);
        return;
      }
      if (bool === false) {
        const serializedData = `status=true&contribution_id=${contributionId}`;
        $.ajax({
          type: "PATCH",
          url: "/api/upvote",
          data: serializedData
        });
          $upvote.removeClass('red')
          count--;
          $upvoteNum.val(count);
          return;
        }
})
}

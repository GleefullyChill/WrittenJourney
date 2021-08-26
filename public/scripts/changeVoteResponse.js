const changeUpvoteResponse = function(status) {
  $(() => {
    const count = status[1];
    const bool = status[0];
    const $upvote = $(`<p>`).text('&hearts');
    const $upvoteNum = $(`<p>`).text ('0')
    if (!count) {
      $.post("/api/upvote",function(data){
        db.query(`SELECT flag_voted FROM votes WHERE owner_id = $1 AND contribution_id = $2`[owner_id, contribution_id])
      })
      $(`<div>1`).addClass(red)
      count++;
      $(`<div>${count}`)
      return;
    }
    if (bool === true) {
      $.ajax({
        type: "PATCH",
        url: "/api/upvote",
        data: function(data){db.query(`UPDATE votes SET upvote = false WHERE owner_id = $1 AND contribution_id = $2`[owner_id, contribution_id])}
      });
        $upvote.addClass(red)
        count++;
        $(`<div>${count}`)
        return;
      }
      if (bool === false) {
        $.ajax({
          type: "PATCH",
          url: "/api/upvote",
          data: function(data){db.query(`UPDATE votes SET upvote = TRUE WHERE owner_id = $1 AND contribution_id = $2`[owner_id, contribution_id])}
        });
          $(`<div>1`).removeClass()
          count--;
          $(`<div>${count}`)
          return;
        }
})
}

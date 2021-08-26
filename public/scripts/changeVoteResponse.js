const changeUpvoteResponse = function(status) {
  $(() => {
    const count = status[1];
    const bool = status[0];

    if (!count) {
      POST
      $(`<div>1`).addClass(red)

      return;
    }
    if (bool) {
      PATCH
      count--;
      $(`<div>${count}`).removeClass()
      return;
    }
    count++;
    $(`<div>${count}`)
  })
}

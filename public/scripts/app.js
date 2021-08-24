$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  //this will make it client side SPA behaviour
  $.get(/*route here*/)
    .then((/*what the route returns*/) => {})

  $.post(/*route here*/)
    .then((/*what the route returns*/) => {})

  $.post(/*route here*/)
    .then((/*what the route returns*/) => {})

  $.post(/*route here*/)
    .then((/*what the route returns*/) => {})

  $.ajax({
    method: "PATCH",
    url: "/api/users"

  $.ajax({
    method: "PATCH",
    url: "/api/users"

  $.ajax({
    method: "PATCH",
    url: "/api/users"
});


const loadTitles = function() {
  $.get("/api/titles", (response) => {
    renderTitles(response);
  });
};
 const loadStory = function(storyQuery) {
    $.get(`/api/story?${storyQuery}`, (response) => {
      renderStory(response);
    });
  };
$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;

  //this will make it client side SPA behaviour

  loadTitles()



  // $.post(/*route here*/)
   //  .then((/*what the route returns*/) => {})

  // $.post(/*route here*/)
  //   .then((/*what the route returns*/) => {})

  // $.post(/*route here*/)
  //   .then((/*what the route returns*/) => {})

  // $.ajax({
  //   method: "PATCH",
  //   url: "/api/users"

  // $.ajax({
  //   method: "PATCH",
  //   url: "/api/users"

  // $.ajax({
  //   method: "PATCH",
  //   url: "/api/users"
});

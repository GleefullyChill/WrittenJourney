
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
const getUpvoteInfo = function(serializedData) {
  $.get("/api/upvote", serializedData, (response) => {
    changeUpvoteResponse(response);
  })
}
const getTitleInfo = function() {
  return $.get("/api/titles", (response) => {
    return response;
  });
};
const addContributionToStory = function(storyId, contributionId) {
  const serializedData = `story_id=${storyId}&contribution_id=${contributionId}`
  $.ajax({
    method: "PATCH",
    url: `/add/${storyId}/${contributionId}`,
    data: serializedData
  })
  .then(() => {
    loadStory(`story_id=${storyId}`);
  })
}

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

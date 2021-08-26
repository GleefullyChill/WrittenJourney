

//this will make it client side SPA behaviour

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
const getUpvoteInfo = function() {
  $.get("/api/upvote", (response) => {
    changeUpvote(response);
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

  // Once everything's loaded, start it up!

  loadTitles()

});



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
    type: "PATCH",
    url: `/${storyId}/${contributionId}`,
    data: serializedData
  }).then(() => {
      loadStory(serializedData);
    })
}

$(() => {

  // Once everything's loaded, start it up!

  loadTitles()

});

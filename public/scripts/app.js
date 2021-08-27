

// All AJAX requests should be here

//    GET
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
const loadUpvote = function(urlEncodedData) {
  $.get("/api/upvote", urlEncodedData, (response) => {
    initialUpvoteInfo(response)
  });
}
const getUpvoteInfo = function(urlEncodedData) {
  $.get("/api/upvote", urlEncodedData, (response) => {
    changeUpvoteResponse(response);
  });
}
const getTitleInfo = function() {
  return $.get("/api/titles", (response) => {
    return response;
  });
};

//    POST
const postStory = function(urlEncodedData) {
  $.post('/create', urlEncodedData)
    .then(() => loadTitles());
};
const postContribution = function (urlEncodedData, serializedStoryId) {
  $.post(`/add/${serializedStoryId}/contribute`, urlEncodedData)
    .then(() => loadStory(serializedStoryId));
};
const postUpvote = function(urlEncodedData) {
  $.post("/upvote", urlEncodedData);
};

//    Patch
const editVoteStatus = function(urlEncodedData, contributionId) {
  $.ajax({
    type: "PATCH",
    url: `/edit/${contributionId}`,
    data: urlEncodedData
  });
};
const addContributionToStory = function(urlEncodedData) {
  $.ajax({
    type: "PATCH",
    url: `/:story/:contribute`,
    data: urlEncodedData
  }).then(() => loadStory(urlEncodedData));
}
const changeComplete = function(urlEncodedData) {
  $.ajax({
    type: "PATCH",
    url: `complete/${urlEncodedData}`,
    data: urlEncodedData
  })
}


$(() => {

  // Once everything's loaded, start it up!

  loadTitles();
  createStorySubmit();
});

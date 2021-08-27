

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
const loadUpvote = function(serializedData) {
  $.get("/api/upvote", serializedData, (response) => {
    initialUpvoteInfo(response)
  });
}
const getUpvoteInfo = function(serializedData) {
  $.get("/api/upvote", serializedData, (response) => {
    changeUpvoteResponse(response);
  });
}
const getTitleInfo = function() {
  return $.get("/api/titles", (response) => {
    return response;
  });
};

//    POST
const postContribution = function (serializedData) {
  $.post(`/add/${serializedStoryId}/contribute`, serializedData)
}

//    Patch
const addContributionToStory = function(serializedData) {
  $.ajax({
    type: "PATCH",
    url: `/:story/:contribute`,
    data: serializedData
  }).then(() => {
      loadStory(serializedData);
    })
}
const changeComplete = function(serializedData) {
  $.ajax({
    type: "PATCH",
    url: `complete/${serializedData}`,
    data: serializedData
  }).then(() => {
      loadTitles();
    })
}


$(() => {

  // Once everything's loaded, start it up!

  loadTitles()

});

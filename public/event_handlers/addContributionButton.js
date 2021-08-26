const addContributionButton = function() {
  $(() => {
    const $addContributionButton = $('.add-contribution')
    $addContributionButton.on('click', function(event) {
      $(this).unbind("click");
      const contributionId = $(this).attr("id");
      const storyId = $(this).attr("value");
      addContributionToStory(storyId, contributionId);
    })
  })
}

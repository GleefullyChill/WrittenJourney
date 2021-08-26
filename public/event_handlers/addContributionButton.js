const addContributionButton = function() {
  $(() => {
    const $addContributionButton = $('.add-contribution')
    $addContributionButton.on('click', function(event) {
      $(this).unbind("click");
      const contributionId = attr("id");
      const storyId = attr("value");
    })
  })
}

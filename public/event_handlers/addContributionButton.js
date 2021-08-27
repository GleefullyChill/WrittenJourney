const addContributionButton = function(id) {
  $(() => {
    const $addContributionButton = $(`#add-contribution-${id}`)
    $addContributionButton.on('click', function(event) {
      event.preventDefault();
      $(this).unbind("click");
      const serializedData= $(this).attr("value");
      addContributionToStory(serializedData);
    })
  })
}

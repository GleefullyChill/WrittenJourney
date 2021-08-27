



const addContributionButton = function(id) {
  $(() => {

    const $addContributionButton = $(`#add-contribution-${id}`)
    $addContributionButton.on('click', function(event) {

      // prevent refresh and unbind the click so that it doesn't persist in the DOM
      event.preventDefault();
      $(this).unbind("click");
      // value should include an URL encoded string with story id and contribution id
      const urlEncodedData= $(this).attr("value");

      // app.js ajax
      addContributionToStory(urlEncodedData);
    })
  })
}

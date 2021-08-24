
//called by the add_contribution.js route


$(() => {
  const newContribution= function(username, contribution) {

    //find the tag we made within renderStory to attach this to
    const $newContributionSubmission = $(`.new-contribution-submission`);

    //puts all the data to gether to send in to the contribution element
    const date = Date.now();
    const contributionInfo = {
      username: username,
      content: contribution,
      date
    }
    const $contribution = createContributionElement(contributionInfo)

    $newContributionSubmission.append($contribution);
  }
})


//called by the add_contribution.js route


$(() => {
  const newContribution= function(username, contribution) {
    const $newContributionSubmission = $(`.new-contribution-submission`);
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

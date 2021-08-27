
//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


const createContributionElement = function(contributionInfo, storyId, userCheck) {

  const content = contributionInfo.content;
  const contributionId = contributionInfo.id;
  const date = timeago.format(contributionInfo.date)

  if(content) {
    console.log("createContributionElement")
    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p class="contribution-content" value=${contributionId}>`).text(content);
    const $date = $(`<div>`).text(date);
    const $upvote = $(`<div class="upvote" id="upvote-${contributionId}">`).text('&hearts');

    const $upvoteNum = $(`<div class="upvote-count" id="upvote-count-${contributionId}">`).html(0);

    //put it into this block of HTML
    const $contribution = $(`<section class="contribution" value="${storyId}">`).append(
        $username,
        $content,
        $date,
        $upvote,
        $upvoteNum
    )
    upvoteButton(contributionId)
    //NEEDS AN UPVOTE button

    //send the HTML back
    if (userCheck) {
      const $button = $(`<button class="add-contribution" id="add-contribution-${contributionId}" value="${storyId}" type="button">Add Contribution</button>`)
      $contribution.append($button);
      addContributionButton(contributionId);
    }
    return $contribution;
  }
  return $(`<section class="no-contribution-yet>"`);
}

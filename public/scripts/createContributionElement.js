
//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


const createContributionElement = function(contributionInfo, storyId, userCheck) {

  const content = contributionInfo.content;
  const contributionId = contributionInfo.id;
  const date = timeago.format(contributionInfo.date)

  if(content) {

    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p class="contribution-content" value=${contributionId}>`).text(content);
    const $date = $(`<div>`).val(date);
    const $upvote = $(`<p>`).text('&hearts 111');
    // for now
    const $upvoteNum = $(`<p>`).text ('0')

    //put it into this block of HTML
    const $contribution = $(`<section class="contribution" value="${storyId}">`).append(
        $username,
        $content,
        $date,
        $upvote
    )
    //NEEDS AN UPVOTE button

    //send the HTML back
    if (userCheck) {
      const $button = $(`<button class="add-contribution" id="${contributionId}" value="${storyId}" type="button">Add Contribution</button>`)
      $contribution.append($button);
      addContributionButton();
    }
    return $contribution;
  }
  return $(`<section class="no-contribution-yet>"`);
}


//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


const createContributionElement = function(contributionInfo, storyId) {

  const content = contributionInfo.content;
  const contributionId = contributionInfo.id;
  const date = timeago.format(contributionInfo.date)

  if(content) {
    console.log("here?")
    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p class="contribution-content" value=${contributionId}>`).text(content);
    const $date = $(`<div>`).val(date);
    const $upvote = $(`<p>`).text('&hearts');
    // for now
    const $upvoteNum = $(`<p>`).text ('0')

    //put it into this block of HTML
    const $contribution = $(`<section class="contribution" value="${storyId}">`).append(
        $username,
        $content,
        $date
    )
    //NEEDS AN UPVOTE button

    //send the HTML back
    return $contribution;
  }
  return $(`<section class="no-contribution-yet>"`);
}


//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


const createContributionElement = function(contributionInfo, storyId, userCheck) {

  const content = contributionInfo.content;
  const contributionId = contributionInfo.id;
  const date = timeago.format(contributionInfo.date)

  if(content) {

    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p class="contribution-content" value=${contributionId}>`).text(content);
    const $date = $(`<div>`).text(date);
    const $upvote = $(`<div class="upvote">`).append($(`
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
    `));

    const $upvoteNum = $(`<div class="upvote-count">`).html(0);

    //put it into this block of HTML
    const $contribution = $(`<section class="contribution" value="${storyId}">`).append(
        $username,
        $content,
        $date,
        $upvote,
        $upvoteNum
    )
    upvoteButton()
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


//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


const createContributionElement = function(contributionInfo, storyId) {

  //get all the info safely into html code, story Id is safe
  const $username = $(`<div>`).text(contributionInfo.username);
  const $content = $(`<p>`).text(contributionInfo.content);
  const $date = $(`<div>`).text(contributionInfo.date);

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

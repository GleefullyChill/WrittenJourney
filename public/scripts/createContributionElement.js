
//called by renderStory and by newContribution scripts, builds an html element with jQuery to follow the story element in chronological order


$(() => {
  const createContributionElement = function(contributionInfo) {

    //get all the info safely into html code
    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p>`).text(contributionInfo.content);
    const $date = $(`<div>`).text(contributionInfo.date);

    //put it into this block of HTML
    const $contribution = $(`
      <section class="">
        ${$username}</div>
        ${$content}</p>
        ${$date}</div>
      </section>
    `)
    //send the HTML back
    return $contribution;
  }
})

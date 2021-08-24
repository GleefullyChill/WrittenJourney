
//called by render story, builds an html element with jQuery to follow the story element in chronological order


$(() => {
  const createContributionElement = function(contributionInfo) {
    const $username = $(`<div>`).text(contributionInfo.username);
    const $content = $(`<p>`).text(contributionInfo.content);
    const $date = $(`<div>`).text(contributionInfo.date);
    const $contribution = $(`
      <section class="">
        ${$username}</div>
        ${$content}</p>
        ${$date}</div>
      </section>
    `)
    return $contribution;
  }
})

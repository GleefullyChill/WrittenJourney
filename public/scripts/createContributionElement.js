
//called by render story, builds an html element with jQuery to follow the story element in chronological order


$(() => {
  const createContributionElement = function(contributionsInfo) {
    const $username = $(`<div>`).text(contributionsInfo.username);
    const $content = $(`<p>`).text(contributionsInfo.content);
    const $date = $(`<div>`).text(contributionsInfo.date);
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


//called in renderTitles.js and createStorySubmit.js


$(() => {


  const createTitleElement = function(title) {
    const $username = $(`<div>`).text(title.username);
    const $titleText = $(`<h3>`).text(title.title);
    const $abstract = $(`<p>`).text(title.abstract);
    let $complete;
    if (title.complete === true) {
      $complete = $(`<div>${'Complete!'}</div>`);
    } else {
      $complete = $(`<div>${'In Progress'}</div>`);
    }
    const $title = $(`
      <section class="title">
        ${$titleText}
        ${$abstract}
        ${$username}
        ${$complete}
      </section>
    `)
    return $title
  }
})

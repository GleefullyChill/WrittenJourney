$(() => {
  const renderStory = function(story, contributions) {
    const $activeStory = $(`.active-story`);
    const $story = createStoryElement(story);
    for (const contribute of contributions) {
      const $contribute = createContributionElement(contribute)
      $activeStory.append($contribute);
    }
    $activeStory.prepend($story)
    const $contributionForm = $(`
      <form class="new-contribution" method="POST" action=/${story[0].id}/contribute>
        <textarea id="contribution-text" class>
        <label for="contribution-text">You can contribute too!
        <div>
          <button type="submit" class="form-button">
        </div>
        </textarea>
      </form>
    `)
    $activeStory.append($contributionForm);
  }
})


//is called in route functions of story.js and add_contribution.js

const renderStory = function(story, contributions) {
  $(() => {
    if (!story || !contributions) {
      return;
    }

    //find the place where the story has been activated
    const $activeStory = $(`.active-story`);
    //create a story element from all the contributions currently active within the story and put it at the top of the container
    const $story = createStoryElement(story);
    $activeStory.prepend($story)
    //contributions is an array of objects to be turned into contribution elements
    for (const contribute of contributions) {
      const $contribute = createContributionElement(contribute)

      //then add them to the active container from the bottom, first contribution first
      $activeStory.append($contribute);
    }
    //add a tag for us to stick any new contributions
    $newContribution = $(`<div="new-contribution-submission"></div>`)
    //create a form underneath all of the contributions, action takes the story_id which is the passed here from the first story object
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

  })
}

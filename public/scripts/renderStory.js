
//is called in route functions of story.js and add_contribution.js

const renderStory = function(storyInformation) {
  $(() => {

    //comes in with an arrary of 2 arrays
    const story = storyInformation[0];
    const contributions = storyInformation[1];
    const storyId = storyInformation[2];
    const $activeStory = $(`.active-story`);
    $activeStory.empty();

      //turn into an error, story is gone


    //find the place where the story has been activated
    if (story) {
      // if ($activeStory.hasClass("empty-story")) {
      //   $activeStory.removeClass("empty-story");
      // }
      //create a story element from all the contributions currently active within the story and put it at the top of the container
      const $story = createStoryElement(story);
      console.log("story: ", $story)
      $activeStory.append($story)
      //contributions is an array of objects to be turned into contribution elements
      for (const contribute of contributions) {
        const $contribute = createContributionElement(contribute, storyId)
        //then add them to the active container from the bottom, first contribution first
        $activeStory.append($contribute);
      }
    }// else {
    //   $activeStory.addClass("empty-story");
    // }
    //add a tag for us to stick any new contributions
    $newContribution = $(`<div="new-contribution-submission"></div>`)
    //create a form underneath all of the contributions, action takes the story_id which is the passed here from the first story object
    const $contributionForm = $(`
    <form class="create-contribution" value="story_id=${storyId}">
        <textarea id="contribution-text" class></textarea>
        <label for="contribution-text"> You can contribute too!
        <div>
          <button type="submit" class="form-button">Submit
        </div>

      </form>
    `)
    $activeStory.append($contributionForm);
    submitContributionListener();
  })
}

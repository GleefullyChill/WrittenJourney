
//is called in route functions of story.js and add_contribution.js

const renderStory = function(storyInformation) {
  $(() => {
    const userCheck = storyInformation[0].splice(-1)[0];
    //comes in with an arrary of 2 arrays
    const story = storyInformation[0];
    const contributions = storyInformation[1];
    const storyId = storyInformation[2];
    const $activeStory = $(`.active-story`);
    $activeStory.empty();


    //if nothing is here, that means database failed to provide a story for the given story_id
    if (story) {

      //create a story element from all the contributions currently active within the story and put it at the top of the container
      const $story = createStoryElement(story);

      //check
      if (userCheck) {
        const $button = $(`<button class="mark-complete" id="mark-complete-${storyId}" value="${storyId}" type="button">Mark This Story Complete!</button>`)
        $story.append($button);
        markCompleteButton(storyId);
      }

      $activeStory.append($story)
      // //contributions is an array of objects to be turned into contribution elements
      for (const contribute of contributions) {
        const $contribute = createContributionElement(contribute, storyId, userCheck)
        //then add them to the active container from the bottom, first contribution first
        $activeStory.append($contribute);
      }
    }
    getTitleInfo().then(data => {
      const titleInfo = data[storyId-1];
      if (!titleInfo.completed) {

        //add a tag for us to stick any new contributions
        $newContribution = $(`<div="new-contribution-submission"></div>`)
        //create a form underneath all of the contributions, action takes the story_id which is the passed here from the first story object
        const $contributionForm = $(`

        <form class="create-contribution" value="story_id=${storyId}">
            <textarea id="contribution-text" value="story_id=${storyId}" placeholder = "You can contribute too!"></textarea>


            <div>
              <button type="submit" class="form-button">Submit
            </div>

          </form>
        `)
        $activeStory.append($contributionForm);
        submitContributionListener(storyId);
      }
    })
  })
}


//called by renderStory to create an element made from the information passed to it
//also called when a new story is submitted?


$(() => {
  const createStoryElement = function(storyInfo) {

    //keeping the owner out of the for loop will allow for more modularity in the future
    const owner = storyInfo[0].username;
    let story = `${storyInfo[0].content}\n`;
    const storyDate = timeago.format(storyInfo[0].date);

    storyInfo.shift();

    //this will put the data into a manageble form for turning into HTML
    let contributors = "Story contributions from: ";

    for (const contribution of storyInfo) {

      contributors += `${contribution.username}, `;
      story += `${contribution.content}\n`;

    }
    contributors += `and of course, ${owner}!`;

    //put it safely into HTML, no crossscripting attacks
    $content = $(`<p>`).text(story);
    $contributors = $(`<div>`).text(contributors);
    $date = $(`<div>`).text(storyDate);

    //this format will allow us to easier change the end look by adding more html elements
    $story = $(`
      <section class="visible rendered story">
        ${$date}</div>
        ${$content}</p>
        ${$contributors}</div>
      </section>
    `);

    return $story;
  }
})


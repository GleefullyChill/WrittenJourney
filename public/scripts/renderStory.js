$(() => {
  const renderStory = function(story, contributions) {
    const $title = $(`.title`);
    const $story = createStoryElement(story);
    for (const contribute of contributions) {
      const $contribute = createContributionElement(contribute)
      $title.append($contribute);
    }
    $title.prepend($story)
  }
})

// const renderTweets = function(tweets) {
//   const $tweetContainer = $('.tweet-container');
//   $tweetContainer.empty();
//   for (const tweet of tweets) {
//     const $tweet = createTweetElement(tweet);
//     $tweetContainer.prepend($tweet);
//   }
// };

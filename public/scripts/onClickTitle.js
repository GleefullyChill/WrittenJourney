
//titles that ar clicked should activate this function


$(() => {
  $title = $('.title')

  $title.click(() => {
    $('.active-story').removeClass("acitve-story");

    this.addClass('active-story')
    renderStory();
  });

});

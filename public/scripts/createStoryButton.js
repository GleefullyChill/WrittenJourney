// called by click create a story button, builds an html element

$(() => {
//  after document is ready, the create-story form is hided
  $('#create-story').hide();

  $('.toggle-switch').on('click', ()=>{
  $("#create-story").slideToggle()
  })
  // const $createStoryform = $("#create-story");
  // $createStoryform.on('submit', function (event) {
  //   // this prevents html to defaultly post to another page
  //   event.preventDefault();






})

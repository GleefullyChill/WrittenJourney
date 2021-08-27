## Creation
​
- Stretch overall: live update

## When a user is not logged in?
-users
​- see all the active contributions to a story
-see all upvotes to a story
- view a list of stories on the homepage
- read any story

## stretch
-see a list of all contributors to a story

## When a user is logged in, they can:
- start a story
- add contributions to a story
- upvote a contribution


​
## stretch additions:
-add a history button to see rejected contributions
-add tags to stories/titles
-ask the creator to choose a genre, change background color/image according to genre.
-users can add pictures/use different fonts to create their story
- favorite a story
- see a track of number of contributions
- see their accepted contributions
- earn ranks based off of number of contributions
- search for stories using categories
- flag contributions for inappropriate rating (eg, G, PG, PG-23)
- flag creators for inappropriate rating (eg, G, PG, PG-13)
​
## When a user looks at a story they own, they can:
- accept a contribution, merging it into the story
- mark a story completed
​
## stretch addition:
- see users who contributed
- flag inappropriate content
- add a category to a completed story
- add / edit a rating (eg, G, PG, PG-13)
- set a timer for contribution submissions
- edit their abstract
​
## When a user is logged in, they cannot:
- add to a completed story
- accept a contribution to a story they did not create
- reject contributions
​
## stretch addition:
- see content outside of their desired rating
- see flagged content unless their desired rating is M
​
​
## User Statements
As a user, I want to submit content to the story
As a creator, I want to choose which submission is added to my story
​
​
​
## Basic ERD
​
users*
id*
username
​
stories*
id*
owner_id*
title*
abstract


content
id
owner_id
story_id
content Not Null
within_story BOOLEAN
 


votes
user_id
content_id
upvoted BOOLEAN
​



```
SELECT COUNT(*)
FROM VOTES
WHERE content_id = $1
```
​
​
## Routes
"/"*
See story titles
​
"/login"*-Crystal
"/register"* -Crystal
self-explanatory
​
"/create"* -Crystal
should create a story, only available to logged in users
-POST
​
"/:story"* -Luke
clicking on the title on the homepage should bring out the story and all the contributions, along with some way to add a contribution
-GET
​
"/:story/contribute" -Luke
should create a contribution, only available to logged in users
-POST
​
"/:add_contribution" -Luke
should merge the selected contribution into the story it is connected to
-PATCH
​
"/:contribution/upvote"-Crystal
should add an upvote to the contribution
-POST

“/:contribution/upvote/remove_upvote”
-PATCH

“/:contribution/upvote/redo_upvote”
-PATCH
​
## Stretch ERD
- favorites
- accepted_contribution
-
​
​
## Possible formats
## SPA
-- expand story
-- pop out story
--
​
## Limits
-- how big should a story start be
-- how big should a contribution be
-- what limit of story size






## Resources to refer:
https://www.plot-generator.org.uk/?i=2ezctpvi
This website could contribute to our database entries.

https://storymaps.arcgis.com/stories/92b2ae1a9f11492189d6e9b5fa8ad07e
I like the design of this site.

Below is a typical type of  story creator sites, mainly for kids, mainly readers can only comment on stories instead of contributing to them. Owners can create fancy decoration of the book: pictures, colorful and different fonts to choose from...etc.
https://www.imagineforest.com/




##MVP and wildframe
Build on from tweeter?
-longer 
-order of text(the title and first part of the story position fixed on top)
-function: add contribution to story




## To do:

-go through the above
-Friday’s assignments
-Splitting up the Work
-html &css
- js
-database framework
-meetup time tmr


x-special/nautilus-clipboard
copy
file:///home/xiaoyu/Downloads/Story_Creator_Brainstorm.pdf


Story Creator Name
Project name
-- FreshYourStory
-- FreshTellings
-- StoryPieces
-- TellMe!
-- WrittenJourney
-- YourJourney
-- PieceByPiece
-- PieceTogether
--


## Sunday 
name of database?
Sending info through the router
Andy’s way, he shows us the ‘route’ separate from the database query
Have the database query inside the route
For consistency amongst our code

Should we use cookie session? It’s what the final code of tiny app used so it’s what I have available to reference

Use skeleton model until structure is complete
Use cookie session
Database is called midterm - in README

##Monday
	
	-start creating html files and additional functions
	-database seeds
	-add number of votes to the database table contributions (and others)?
-completed.js?
- name the jQuery functions
	-for example “renderTitles” “renderStory” “newContribution” “createStoryElement”
	-”createContributionElement” 
- and then we can finish the routes because we have named where the info is needed to go to
- spa will have an index that will link to many jQuery scripts
- separate scripts by function or by reason
	- for example, Tweeter’s client.js is separated by reason, has many functions
	- but it’s harder to keep work separate between us

HTML Index page-Crystal
createStoryButton.js- C
renderStory -Luke
renderTitles -Luke
newContribution -Luke
createStoryElement -Luke
createContributionElement -Luke
$vote.submit()
createStorySubmit.js-Crystal
contributionSubmit.js- Crystal if time
$storyTitle.click()
acceptContributionButton? Contribution element


I need a time_stamp in a table, or else content will be printed based off id# whoops how about id DESC?
Andy’s lecture today touched on how to make PATCH in ajax, or DELETE(which we chose not to use)
So we’ll need to use the format he showed to do any database updates, instead of just POST
OK, I missed the first half of the course, will try to catch up before our meeting.


## Tuesday:
Upvote routes ignored, we’ve got the routes done!
I have renderTitles to build and then we’re done the route jQuery
titleToStoryOnClick() needs to built
With seeds I think we can test most of this tomorrow and do some general debugging
After we have this working, it’s not pretty at all
Css and voting functionality can be worked on
Maybe prioritize a mentor code review after the stand up, with everyone on board
Make container to hold story author, title and abstract, how to name it?
Add the above container to getStoryInfo as a func call
acceptContributionButton?

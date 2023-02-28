# tech-blog-jk14

# <font color="gold">Model View Controller (MVC): Tech Blog</font>
# 
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)<br />
<br />
## Description<br />
In this project, I built a CMS-style blog site and is similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
<br />
<br />
## Table of Contents<br />

  * [User Story](#userstory)
  * [Acceptance Criteria](#acceptance)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Links](#links)
  * [Mockup](#mockup)
  * [License](#license)
<br />
<br />
## User Story<br />
  <a name="userstory"></a>
AS A developer who writes about tech<br />
I WANT a CMS-style blog site<br />
SO THAT I can publish articles, blog posts, and my thoughts and opinions<br />
<br />
<br />
## Acceptance Criteria<br />
  <a name="acceptance"></a>
GIVEN a CMS-style blog site<br />
WHEN I visit the site for the first time<br />
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br />
WHEN I click on the homepage option<br />
THEN I am taken to the homepage<br />
WHEN I click on any other links in the navigation<br />
THEN I am prompted to either sign up or sign in<br />
WHEN I choose to sign up<br />
THEN I am prompted to create a username and password<br />
WHEN I click on the sign-up button<br />
THEN my user credentials are saved and I am logged into the site<br />
WHEN I revisit the site at a later time and choose to sign in<br />
THEN I am prompted to enter my username and password<br />
WHEN I am signed in to the site<br />
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br />
WHEN I click on the homepage option in the navigation<br />
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br />
WHEN I click on an existing blog post<br />
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br />
WHEN I enter a comment and click on the submit button while signed in<br />
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br />
WHEN I click on the dashboard option in the navigation<br />
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br />
WHEN I click on the button to add a new blog post<br />
THEN I am prompted to enter both a title and contents for my blog post<br />
WHEN I click on the button to create a new blog post<br />
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br />
WHEN I click on one of my existing posts in the dashboard<br />
THEN I am able to delete or update my post and taken back to an updated dashboard<br />
WHEN I click on the logout option in the navigation<br />
THEN I am signed out of the site<br />
WHEN I am idle on the site for more than a set time<br />
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments<br />
<br />
<br />
## Installation <br />
  <a name="installation"></a>
    1) User can copy repository from github at: (https://github.com/jckutch/tech-blog-jk14)<br />
    2) Then install all dependencies with `npm i` in terminal.<br />
    3) Then enter personal mysql username and password in `.env`<br />
    4) Then log into MySQL by entering `mysql -u root -p` in the command line, using your personal password.<br />
    5) Then execute database by entering `SOURCE db/schema.sql`.<br />
    5) Then enter `quit` in MySQL and enter `npm run seed` in terminal to run application.<br />
    6) Then enter `npm start` to start database.<br />
    7) Then run `localhost:3001` in browser.<br />
<br />
<br />
## Usage<br />
  <a name="usage"></a>
User can create a unique login, create a blog post with title, update post and delete post.  They can also add a comment to another users post.
When user goes to dashboard they see all their post.
All of blogs post can be seen by selecting the `home` button.<br />
<br />
<br />
## Tests<br />
  <a name="tests"></a>
None<br />
<br />
<br />
## Links
  <a name="links"></a><br />
Repository Link:  https://github.com/jckutch/tech-blog-jk14<br />
<br />
Heroku Link:  https://tech-blog-jk14.herokuapp.com<br />
<br />
<br />
## Mockup
  <a name="mockup"></a>
<br />
Sample HTML images:
![team-image](./assets/Screenshot%202023-02-27%20224059.jpg)<br />
![team-image](./assets/Screenshot%202023-02-27%20223949.jpg)<br />
![team-image](./assets/Screenshot%202023-02-27%20224215.jpg)<br />
<br />
<br />
<br />
## License 
  <a name="license"></a> License
Licensed under <br /> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/).
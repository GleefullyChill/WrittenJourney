Writing Journey
=========

## Midterm Project For Lighthouse Labs

A demo ready story creation app. A user can read a story and the contributions made for that story by pressing on "Expand!" under the corresponding title. The user cannot upvote, create a story, or submit a contribution to the story before logging in. When logged in as the creator of a story, the user can choose to accept a contribution to become part of their story and dismiss all other contributions. They can also choose to complete their story and prevent any new contributions from being submitted to it.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `` 
  - password: `` 
  - database: ``
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- If running an M1, be prepared to do a few extra steps:
  - One line at a time in your Command Line
  ```
  xcode-select --print-path
  sudo rm -rf $(xcode-select --print-path)
  xcode-select --install
  ```

## Dependencies

- Postgresql database
- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Express
- Dotenv
- Ejs
- Morgan 
- Cookie-Session
- Node-Sass-Middleware
- Chalk
- Nodemon

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stories CASCADE;
DROP TABLE IF EXISTS contributions CASCADE;
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS story_contributions CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

 CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  abstract VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
  );

CREATE TABLE story_contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id) ON DELETE CASCADE,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  contribution_id INTEGER REFERENCES contributions(id) ON DELETE CASCADE,
  within_story BOOLEAN NOT NULL DEFAULT FALSE);


CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(5000),
  date INTEGER,
  active BOOLEAN NOT NULL DEFAULT TRUE);

  CREATE TABLE votes (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  contribution_id INTEGER REFERENCES contributions(id) ON DELETE CASCADE
  flag_voted BOOLEAN NOT NULL DEFAULT FALSE);

  -- check -- if it is positive it means user vote his own contribution
  -- select * from votes v
  -- where not EXISTS (select 1 from story_contributions sc
  -- where v.contribution_id = sc.contribution_id and v.owner_id=sc.owner_id)


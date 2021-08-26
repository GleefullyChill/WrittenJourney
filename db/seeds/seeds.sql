INSERT INTO users (name, email)
VALUES ('Valerie Jack', 'val@ue.com'),
('Jordan Bool', 'math@memes.ca'),
('Courtney Candy', 'pony@me.com'),
('Harvey Hugh', 'huge@truck.com');

INSERT INTO stories (owner_id, title, abstract, completed)
VALUES (2, 'Into the forest', 'A pair of friends get into trouble going to through the woods', TRUE),
(2, 'Jogging the beach', 'They jogged in sand', TRUE),
(2, 'Castle in your King', 'They played a game', FALSE),
(4, 'Friendship is Manly', 'Men can be friends too!', FALSE);

INSERT INTO contributions (content, date, active)
VALUES ('Gathering their courage, they ran into the woods.', 1628986411384, TRUE),
('Jogging1',1628986411384, TRUE),
('Castle1', 1628986411384, TRUE),
('Jogging2', 1628986411384, FALSE),
('Jogging3', 1628986411384, TRUE),
('Castle2', 1628986411384, TRUE),
('Jogging4', 1628986411384, TRUE),
('Jogging5', 1628986411384, TRUE),
('Friendship1', 1628986411384, TRUE),
('Friendship2', 1628986411384, TRUE),
('Friendship3', 1628986411384, TRUE);

INSERT INTO story_contributions (story_id, owner_id, contribution_id, within_story)
VALUES (1, 2, 1, TRUE),
(2, 2, 2, TRUE),
(3, 2, 3, TRUE),
(2, 1, 4, FALSE),
(2, 1, 5, TRUE),
(3, 3, 6, FALSE),
(2, 2, 7, TRUE),
(2, 3, 8, TRUE),
(4, 4, 9, TRUE),
(4, 1, 10, FALSE),
(4, 2, 11, FALSE);

--INSERT INTO votes (owner_id, contribution_id, flag_voted)
--VALUES ;

BEGIN;

INSERT INTO "list" ("title", "position") VALUES
('backLog', 1),
('en cours', 2),
('terminé',3),
('en révision',4);

INSERT INTO "card" ("title", "position", "color", "list_id") VALUES
('MCD',1,'vert',4),
('User Stories',2,'vert',3),
('MLD',1,'vert',2),
('MPD',2,'vert',2),
('créer les tables',1,'orange',1),
('créer les données fictives',2,'orange',1),
('se connecter à la BDD',3,'violet',1);

INSERT INTO "tag" ("name", "color") VALUES
('rapide','#0F0'),
('doc','#FF0'),
('danger','#F00'),
('fix','#00F'),
('attention','#FF7F00'),
('add','#7F00FF'),
('ultra urgent','#000');

INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
(1,1),
(1,2),
(2,5);

COMMIT;

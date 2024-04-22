-- On va démarrer une transaction qui permet de s'assurer que toutes les requêtes passent ou aucune
BEGIN;

-- On va supprimer les tables si elle existe
DROP TABLE IF EXISTS "card_has_label", "card", "label", "list";

-- On va créer les tables

CREATE TABLE "list" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "color" TEXT NOT NULL DEFAULT '#F0F',
  "position" INTEGER NOT NULL DEFAULT 0,
  -- on delete cascade permet de supprimer les cartes liées à une liste si on supprime la liste
  "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "label" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL DEFAULT '#0F0',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_label" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  -- Ici le on delete cascade permet que lorsqu'une carte est supprimer, l'association qu'elle a avec un label est supprimée
  "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
  "label_id" INTEGER NOT NULL REFERENCES "label"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

INSERT INTO "list"("title", "position") 
VALUES 
  ('A faire', 0),
  ('En cours', 1),
  ('En revue', 2),
  ('Fait', 3);

INSERT INTO "card"("title", "position", "list_id")
VALUES 
  ('Initialiser la bdd', 0, 1),
  ('Créer les tables', 1, 1),
  ('Créer les routes', 2, 1),
  ('Créer les composants', 3, 1),
  ('Créer les styles', 4, 1),
  ('Créer les tests', 5, 1);

INSERT INTO "label"("name", "color")
VALUES 
  ('Bug', '#F00'),
  ('Feature', '#0F0'),
  ('Improvement', '#00F');

INSERT INTO "card_has_label"("card_id", "label_id")
VALUES 
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 1),
  (5, 2),
  (6, 3);

-- On commit la transaction / valide la transaction
COMMIT;

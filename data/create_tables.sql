BEGIN;

DROP TABLE IF EXISTS  "card_has_tag", "card", "tag", "list";

-----------------------------------------
-------------- Table "list" -------------
-----------------------------------------

CREATE TABLE "list" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
-------------- Table "card" -------------
-----------------------------------------

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0,
  "color" TEXT NOT NULL DEFAULT '#BED',
  "list_id" INTEGER NOT NULL REFERENCES "list" ("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
-------------- Table "tag" -------------
-----------------------------------------

CREATE TABLE "tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL DEFAULT '#BED',,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
--------- Table "card_has_tag" ----------
-----------------------------------------

CREATE TABLE "card_has_tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "card_id" INTEGER NOT NULL REFERENCES "card" ("id") ON DELETE CASCADE,
  -- quand une carte est supprimée, l'association qu'elle a avec le tag est supprimée aussi
  "tag_id" INTEGER NOT NULL REFERENCES "tag" ("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  "updated_at" TIMESTAMPTZ,
  UNIQUE ("card_id", "tag_id")
);

COMMIT;
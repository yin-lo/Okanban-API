BEGIN;

DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

-----------------------------------------
-------------- Table "list" -------------
-----------------------------------------

CREATE TABLE "list" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT,
  "position" INTEGER NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
-------------- Table "card" -------------
-----------------------------------------

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "position" INTEGER,
  "color" TEXT NOT NULL,
  "list_id" INTEGER NOT NULL REFERENCES "list" ("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
-------------- Table "tag" -------------
-----------------------------------------

CREATE TABLE "tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(), 
  "updated_at" TIMESTAMPTZ
);

-----------------------------------------
--------- Table "card_has_tag" ----------
-----------------------------------------

CREATE TABLE "card_has_tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "card_id" INTEGER NOT NULL REFERENCES "card" ("id"),
  "tag_id" INTEGER NOT NULL REFERENCES "tag" ("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(), 
  "updated_at" TIMESTAMPTZ,
  UNIQUE ("card_id", "tag_id")
);

COMMIT;
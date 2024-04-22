# Modèle Logique de Données (MLD)

C'est une étape de **traduction** du MCD en vu d'une implémentation dans un SGBDR :

- français => anglais : on fixe les noms dans la future BDD
  - entités => tables
  - attributs => nom de champ
  - discrimant => ID
- cardinalité/association
  - soit des cléS primaires / étrangères
  - soit des tables de liaison + clés primaires/étrangères

## Version textuelle

```text
list (
  id
  title
  position
)

card (
  id
  title
  position
  color
  #list_id
  created_at
  updated_at
)

tag (
  id
  name
  color
  created_at
  updated_at
)

card_has_tag (
  id
  #card_id
  #tag_id
  created_at
  updated_at
)

```

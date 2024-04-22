# MLD

`#` permet de dire que c'est un champ faisant référence à une autre table.

```mld
list (
  id
  title
  position
  created_at
  updated_at
)

card (
  id
  title
  color
  position
  #list_id
  created_at
  updated_at
)

label (
  id
  name
  color
  created_at
  updated_at
)

card_has_label (
  id
  #card_id
  #label_id
  created_at
  updated_at
)
```

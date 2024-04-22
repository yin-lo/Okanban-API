# REST

La convention de nommage des API suivant le principe REST est celui ci

Un verbe HTTP = une action

- GET => Récupérer
- POST => Créer
- PATCH => Modifier
- DELETE => Supprimer

L'url est le nom de la ressource

| URL | GET | POST | PATCH | DELETE |
| --- | --- | --- | --- | --- |
| /lists | Récupérer toutes les listes | Créer une liste | - | - |
| /lists/:id | Récupérer une liste | - | Modifier une liste | Supprimer une liste |

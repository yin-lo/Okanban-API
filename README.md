# oKanban : Atelier Conception

## JOUR 2

### De "concept" à "logique"

En se basant sur le MCD et en utilisant [les règles basiques de transformation en MLD](https://kourou.oclock.io/ressources/fiche-recap/mld/), lister dans le fichier `docs/tables.md` les tables à créer ainsi que les champs qu'elles vont contenir.

Ne pas oublier de typer chaque champ de chaque table ! [Ici, la liste des types supportés par postgresl](https://www.postgresql.org/docs/9.2/datatype.html#DATATYPE-TABLE).

### Pas de fondations, pas de palais

Commencer par créer un utilisateur et une base de données pour notre projet.

[La fiche récap est ici](https://kourou.oclock.io/ressources/fiche-recap/postgresql/).

### Fichier de Définition des Données

Une fois les tables listées, il est temps d'écrire un fichier SQL qui va contenir toutes les instructions pour créer ces tables!

Garder la [fiche récap SQL](https://kourou.oclock.io/ressources/fiche-recap/le-langage-sql/) sous le coude est une bonne idée :wink:

Quelques règles de base :

- Un seul fichier pour créer toutes les tables !
- Toujours commencer par détruire une table "si elle existe" avant de tenter de la créer. Cela permet d'executer le fichier sans se soucier des runs précédents.
- On peut (on doit?) écrire des commentaires en SQL, `/* Comme ceci */`.

### Seeding

Le seeding est une opération qui consiste à insérer des données fictive dans la base de données afin de pouvoir tester son bon fonctionnement et mettre la logique de notre conception à l'épreuve du feu.

Dans le même fichier SQL que précédemment, après la définition des tables, écrire des instructions SQL pour insérer des données cohérentes dans toutes les tables. Ne pas oublier de remplir AUSSI les tables de liaison !!

### Run SQL, run

Une fois le fichier complet, il est temps de l'executer. On peut se servir de la ligne de commande, ou d'un outil graphique type DBeaver, peu importe.

Rappel, pour executer un fichier SQL en ligne de commande dans PostGres : `psql -U user -f chemin/vers/fichier.sql`

### Models

Maintenant que la base de données est prête et qu'elle contient des données de test, on peut créer nos modèles Sequelize.

- Installer les packages nécessaires
- Créer les dossier habituels (`app` et `app/models`)
- Créer les modèles "façon Sequelize" (s'inspirer des projets précédents - OQuizz)
- Ne pas oublier les associations !

### Test

C'est l'heure de jouer ! Créer un fichier `test.js`, y importer les modèles, et faire quelques requêtes pour vérifier que tout fonctionne !

---

## Description du projet

On refait Trello !

- On souhaite créer une application de type Kanban où il est possible de créer des cartes à l'intérieur de listes.
- L'utilisateur peut créer autant de listes qu'il désire et mettre autant de cartes à l'intérieur de ces listes.
- Chaque liste dispose d'un nom.
- Chaque carte dispose d'un titre, d'une position au sein de la liste, d'une couleur (optionnelle) et d'un ou plusieurs label(s) (optionnel(s))

On se base sur ce besoin pour créer le MCD de l'application.

**Important** : Pas question d'écrire la moindre ligne de SQL ! On s'arrête à la conception aujourd'hui. La mise en place effective de la BDD, c'est pour demain.

## Étape 1 : User Stories

En tant que _client_, je veux _un document_ dans le but de _comprendre les fonctionnalités de mon application_.

Complètez le tableau dans le fichier [user_stories.md](./user_stories.md).

## Étape 2 : MCD

Déssinez le MCD en utilisant l'outils de votre choix : un papier et un crayon, [draw.io](https://draw.io), [Mocodo](http://mocodo.wingi.net/) ([fiche recap](https://kourou.oclock.io/ressources/fiche-recap/mocodo/)), [Whimsical](https://whimsical.com/), etc.

N'hésitez pas à faire un tour sur la [fiche recap du MCD](https://kourou.oclock.io/ressources/fiche-recap/mcd-modele-conceptuel-de-donnees/).
